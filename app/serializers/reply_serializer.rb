class ReplySerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :post_id
end
