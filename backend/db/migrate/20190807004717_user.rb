class User < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
       t.string :name
       t.string :email, null: false
       t.boolean :is_admin, default: false
       t.string :password_digest

       t.timestamps
     end
  end
end
