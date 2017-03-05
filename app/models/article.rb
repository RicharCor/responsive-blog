class Article < ApplicationRecord
	include AASM
	default_scope { order('created_at DESC') }

	belongs_to :user
	has_many :comments 
	has_many :has_categories, :dependent => :delete_all
	has_many :categories, through: :has_categories

	validates :cover, presence: true
	validates :title, presence: true, uniqueness: true
	validates :body, presence: true, length: { minimum: 20 }
	before_save :set_visits_count
	after_create :save_categories

	has_attached_file :cover
	validates_attachment_content_type :cover, { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] }

	extend FriendlyId
		friendly_id :title, use: :slugged

	def should_generate_new_friendly_id?
	   new_record? || slug.nil? || slug.blank? || title_changed?
	end

	def update_visits_count
	    self.update(visits_count: self.visits_count + 1)
	end

	def categories=(value)
		@categories = value
	end

	def self.search(article_search)
		search_article = "%#{article_search}%"

		if article_search
			where(['title LIKE ?', search_article])
		else
			all
		end
	end

	scope :publisheds, ->{ where(state: "published") }

	#scope :lastest, ->{ order("created_at DESC") }

	aasm column: "state" do
		state :in_draft, initial: true
		state :published

		event :publish do
			transitions from: :in_draft, to: :published
		end

		event :unpublish do
			transitions from: :published, to: :in_draft
		end
	end
	
	private

		def save_categories
			@categories.each do |category_id|
				HasCategory.create(category_id: category_id, article_id: self.id)
			end
		end

		def set_visits_count
		    self.visits_count ||= 0
		end
end
