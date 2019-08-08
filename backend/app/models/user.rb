class User < ActiveRecord::Base
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true

  has_secure_password
end