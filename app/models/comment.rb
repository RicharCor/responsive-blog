class Comment < ApplicationRecord
	default_scope { order('created_at DESC') }
	
  	belongs_to :user
  	belongs_to :article

  	validates :title, presence: true
  	validates :body, presence: true, length: { minimum: 10 }

  	validates_length_of :title, maximum: 50
  	validates_length_of :body, maximum: 700
end
