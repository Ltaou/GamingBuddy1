class Api::V1::PostsController < ApplicationController
  def index
    posts = Post.all

    render json: PostSerializer.new(posts, options).serialized_json
  end

  def show
    post = Post.find_by(id: params[:id])

    render json: PostSerializer.new(post, options).serialized_json
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: PostSerializer.new(post).serialized_json
    else
      render json: { error: post.errors.messages }, status: 422
    end
  end

  def update
    post = Post.find_by(id: post_params[:id])
    if post.update(post_params)
      render json: PostSerializer.new(post).serialized_json
    else
      render json: { error: post.errors.messages }, status: 422
    end
  end

  def destroy
    post = Post.find_by(id: post_params[:id])
    if post.destroy
      head :no_content
    else
      render json: { error: post.errors.messages }, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end

  def options
    @options  ||= { include: %i[replies] }
  end
end
