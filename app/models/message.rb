class Message < ApplicationRecord
	belongs_to :user
	delegate :username, to: :user, prefix: true
  	after_create_commit { MessageBroadcastJob.perform_later(self) }
end