class Comment < ApplicationRecord
	default_scope { order('created_at DESC') }
	
  	belongs_to :user
  	belongs_to :article

  	validates :title, presence: true
  	validates :body, presence: true, length: { minimum: 10 }
end
