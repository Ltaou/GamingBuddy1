# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Post.create(title: "first", content:"some content")
Post.create(title: "second", content:"some content")
Post.create(title: "third", content:"some content")

Reply.create(post_id: Post.first.id, title:"first reply", content: "reply goes here")
Reply.create(post_id: Post.first.id, title:"first2 reply", content: "reply goes here")
Reply.create(post_id: Post.first.id, title:"first1 reply", content: "reply goes here")
