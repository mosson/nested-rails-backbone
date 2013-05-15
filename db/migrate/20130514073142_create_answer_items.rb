class CreateAnswerItems < ActiveRecord::Migration
  def change
    create_table :answer_items do |t|
      t.string :sentence
      t.integer :question_id

      t.timestamps
    end
    add_index :answer_items, :question_id
  end
end
