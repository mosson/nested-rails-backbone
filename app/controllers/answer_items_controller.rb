class AnswerItemsController < ApplicationController
  # GET /answer_items
  # GET /answer_items.json
  def index
    @answer_items = AnswerItem.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @answer_items }
    end
  end

  # GET /answer_items/1
  # GET /answer_items/1.json
  def show
    @answer_item = AnswerItem.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @answer_item }
    end
  end

  # GET /answer_items/new
  # GET /answer_items/new.json
  def new
    @answer_item = AnswerItem.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @answer_item }
    end
  end

  # GET /answer_items/1/edit
  def edit
    @answer_item = AnswerItem.find(params[:id])
  end

  # POST /answer_items
  # POST /answer_items.json
  def create
    @answer_item = AnswerItem.new(params[:answer_item])

    respond_to do |format|
      if @answer_item.save
        format.html { redirect_to @answer_item, notice: 'Answer item was successfully created.' }
        format.json { render json: @answer_item, status: :created, location: @answer_item }
      else
        format.html { render action: "new" }
        format.json { render json: @answer_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /answer_items/1
  # PUT /answer_items/1.json
  def update
    @answer_item = AnswerItem.find(params[:id])

    respond_to do |format|
      if @answer_item.update_attributes(params[:answer_item])
        format.html { redirect_to @answer_item, notice: 'Answer item was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @answer_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /answer_items/1
  # DELETE /answer_items/1.json
  def destroy
    @answer_item = AnswerItem.find(params[:id])
    @answer_item.destroy

    respond_to do |format|
      format.html { redirect_to answer_items_url }
      format.json { head :no_content }
    end
  end
end
