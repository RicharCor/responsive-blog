class User < ApplicationRecord
	default_scope { order('created_at DESC') }

  	devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable

  	acts_as_messageable

  	validates :avatar, presence: true
	validates :username, presence: true, uniqueness: true
	validates :first_name, presence: true
	validates :last_name, presence: true

	validates_length_of :username, :maximum => 15
	
	has_many :comments, :dependent => :delete_all
	has_many :articles, dependent: :nullify

	include PermissionsConcern

	has_attached_file :avatar
	validates_attachment_content_type :avatar, { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] }

	def self.search(user_search)
		search_user = "%#{user_search}%"

		if user_search
			where(['username LIKE ?', search_user])
		else
			all
		end
	end

end
