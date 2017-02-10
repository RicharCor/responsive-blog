class HasCategory < ApplicationRecord
  belongs_to :article, dependent: :delete
  belongs_to :category, dependent: :delete
end
