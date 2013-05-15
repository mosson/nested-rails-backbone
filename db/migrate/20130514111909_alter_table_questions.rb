# encoding: utf-8

class AlterTableQuestions < ActiveRecord::Migration
  def change
  	add_column :questions, :placeholder, 		:string
  	add_column :questions, :description, 		:text
  	add_column :questions, :question_type, 	:integer
  	add_column :questions, :answer_type, 		:integer
  	add_column :questions, :order_index, 		:integer
  	add_column :questions, :is_range,				:boolean
  	add_column :questions, :is_shuffle,			:boolean
  	add_column :questions, :range_max,			:integer
  	add_column :questions, :range_min,			:integer
  	add_column :questions, :is_expand,			:boolean
  end
end
