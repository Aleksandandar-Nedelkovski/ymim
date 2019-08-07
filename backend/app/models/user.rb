class User < ActiveRecord::Base
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 

  has_secure_password
end