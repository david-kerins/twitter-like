module ApplicationHelper

  # Logo helper
  def logo
    image_tag("logo.png", :alt => "Twitter-like App", :class => "round")
  end
  # Return a title on a per-page basis.
  def title
    base_title = "Ruby on Rails Twitter-like Concept App"
    if @title.nil?
      base_title
    else
      "#{base_title} | #{@title}"
    end
  end
end
