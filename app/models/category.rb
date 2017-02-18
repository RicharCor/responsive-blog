class Category < ApplicationRecord
	default_scope { order('created_at DESC') }
	
	validates :title, presence: true
	has_many :has_categories, :dependent => :delete_all
	has_many :articles, through: :has_categories

	extend FriendlyId
		friendly_id :title, use: :slugged

	def should_generate_new_friendly_id?
	 	title_changed?
	end

	def self.search(category_search)
		search_category = "%#{category_search}%"
		
		if category_search
			where(['title LIKE ?', search_category])
		else
			all
		end
	end

end
