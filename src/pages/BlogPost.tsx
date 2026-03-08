import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-muted rounded w-1/4" />
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Artikel nicht gefunden</h1>
          <Link to="/#projekte" className="inline-flex items-center gap-2 mt-6 font-body text-primary hover:underline">
            <ArrowLeft size={16} /> Zurück zur Übersicht
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Link
          to="/#projekte"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Zurück zur Übersicht
        </Link>

        <div className="flex items-center justify-between mb-4">
          <span className="section-label">{post.category}</span>
          <span className="font-body text-sm text-muted-foreground">{post.date}</span>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
          {post.title}
        </h1>

        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 border-l-4 border-primary pl-4">
          {post.excerpt}
        </p>

        {post.cover_image && (
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-64 object-cover mb-10"
          />
        )}

        <div className="prose-custom font-body text-foreground leading-relaxed space-y-4">
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("| ")) {
              return (
                <div key={i} className="font-body text-sm text-muted-foreground font-mono bg-muted/30 px-3 py-1">
                  {line}
                </div>
              );
            }
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="font-body text-base text-muted-foreground ml-4 list-disc">
                  <span dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                </li>
              );
            }
            if (line.trim() === "") return null;
            return (
              <p key={i} className="font-body text-base text-muted-foreground leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
              </p>
            );
          })}
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
