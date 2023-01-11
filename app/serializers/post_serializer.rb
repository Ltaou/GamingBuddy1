class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content

  has_many :replies
end
