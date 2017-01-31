json.extract! comment, :id, :user_id, :article_id, :title, :body, :created_at, :updated_at
json.user do
	json.first_name @comment.user.first_name
	json.last_name @comment.user.last_name
	json.username @comment.user.username
	json.email @comment.user.email
end
