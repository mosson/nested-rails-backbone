# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130514111909) do

  create_table "answer_items", :force => true do |t|
    t.string   "sentence"
    t.integer  "question_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  add_index "answer_items", ["question_id"], :name => "index_answer_items_on_question_id"

  create_table "questions", :force => true do |t|
    t.string   "sentence"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.string   "placeholder"
    t.text     "description"
    t.integer  "question_type"
    t.integer  "answer_type"
    t.integer  "order_index"
    t.boolean  "is_range"
    t.boolean  "is_shuffle"
    t.integer  "range_max"
    t.integer  "range_min"
    t.boolean  "is_expand"
  end

end
