require 'test_helper'

class AnswerItemsControllerTest < ActionController::TestCase
  setup do
    @answer_item = answer_items(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:answer_items)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create answer_item" do
    assert_difference('AnswerItem.count') do
      post :create, answer_item: { question_id: @answer_item.question_id, sentence: @answer_item.sentence }
    end

    assert_redirected_to answer_item_path(assigns(:answer_item))
  end

  test "should show answer_item" do
    get :show, id: @answer_item
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @answer_item
    assert_response :success
  end

  test "should update answer_item" do
    put :update, id: @answer_item, answer_item: { question_id: @answer_item.question_id, sentence: @answer_item.sentence }
    assert_redirected_to answer_item_path(assigns(:answer_item))
  end

  test "should destroy answer_item" do
    assert_difference('AnswerItem.count', -1) do
      delete :destroy, id: @answer_item
    end

    assert_redirected_to answer_items_path
  end
end
