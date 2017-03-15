class Chatroom < ApplicationRecord
	has_many :chatroom_users, :dependent => :delete_all 
	has_many :users, through: :chatroom_users
	has_many :messages, :dependent => :delete_all
	belongs_to :user 
end
