class Api::V1::RepliesController < ApplicationController
  def create
    reply = Reply.new(reply_params)
    post=Post.find(params[:post_id])
    reply.post = post

    if reply.save
      render json: ReplySerializer.new(reply).serialized_json
    else
      render json: { error: reply.errors.messages }, status: 422
    end
  end

  def destroy
    reply = Reply.find_by(id: params[:id])
    if reply.destroy
      head :no_content
    else
      render json: { error: reply.errors.messages }, status: 422
    end
  end

  private

  def reply_params
    params.require(:reply).permit(:title, :content)
  end
end
