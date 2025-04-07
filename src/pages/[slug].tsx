import { useEffect, useState } from 'react';
 import PageTransition from '@/components/PageTransition';
 import { motion } from 'framer-motion';
 import { ArrowLeft } from 'lucide-react';
 import { useParams } from 'react-router-dom'; // If using react-router-dom
 import { blogPostsData } from './Blog'; // Import the blog data
 import React from 'react'; // Ensure React is imported

 const BlogPostTemplate = () => {
  const { slug } = useParams();
  const [postContent, setPostContent] = useState<Array<any> | null>(null); // Expecting an array of content objects
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [blogPostInfo, setBlogPostInfo] = useState(null);

  useEffect(() => {
   if (slug) {
    const postInfo = blogPostsData.find(post => post.slug === slug);
    setBlogPostInfo(postInfo);

    setLoading(true);
    import(`../blogs/${slug}.tsx`)
     .then((module) => {
      setPostContent(() => module.default); // Now expecting an array
      setLoading(false);
     })
     .catch((err) => {
      console.error("Error loading blog post:", err);
      setError("Failed to load blog post.");
      setLoading(false);
     });
   }
  }, [slug]);

  useEffect(() => {
   if (blogPostInfo) {
    document.title = `${blogPostInfo.title} | Anand Portfolio`;
   }
  }, [blogPostInfo]);

  if (loading) {
   return (
    <PageTransition>
     <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
       <h1 className="text-3xl font-bold mb-4">Loading Blog...</h1>
      </div>
     </section>
    </PageTransition>
   );
  }

  if (error) {
   return (
    <PageTransition>
     <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
       <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
       <p className="text-muted-foreground dark:text-gray-300">{error}</p>
       <a href="/blog" className="inline-flex items-center mt-4 font-medium text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blogs
       </a>
      </div>
     </section>
    </PageTransition>
   );
  }

  if (!postContent || !blogPostInfo) {
   return (
    <PageTransition>
     <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
       <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
       <p className="text-muted-foreground dark:text-gray-300">Sorry, the blog post you are looking for could not be found.</p>
       <a href="/blog" className="inline-flex items-center mt-4 font-medium text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blogs
       </a>
      </div>
     </section>
    </PageTransition>
   );
  }

  return (
   <PageTransition>
    <section className="py-16 md:py-24 px-6 md:px-12">
     <div className="max-w-3xl mx-auto">
      <a href="/blog" className="inline-flex items-center mb-8 font-medium text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
       <ArrowLeft className="mr-2 h-4 w-4" />
       Back to Blogs
      </a>
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       className="space-y-6 md:space-y-8"
      >
       <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">{blogPostInfo.title}</h1>
       <img
        src={blogPostInfo.image}
        alt={blogPostInfo.title}
        className="rounded-lg w-full object-cover"
        style={{ maxHeight: '500px' }}
       />
       {postContent.map((item, index) => (
  <React.Fragment key={index}>
   {item.type === 'paragraph' && <p className="text-lg text-gray-800 leading-relaxed dark:text-gray-300">{item.value}</p>}
   {item.type === 'heading' && item.level === 2 && (
    <h2 className="text-2xl font-semibold text-gray-900 mt-8 dark:text-gray-100">{item.value}</h2>
   )}
   {item.type === 'heading' && item.level === 3 && (
    <h3 className="text-xl font-semibold text-gray-900 mt-6 dark:text-gray-100">{item.value}</h3>
   )}
   {item.type === 'image' && (
    <div className="my-8 rounded-md overflow-hidden">
     <img src={item.src} alt={item.alt} className="w-full object-cover" />
    </div>
   )}
   {item.type === 'video' && (
  <div className="my-8 rounded-md overflow-hidden h-96"> 
    <iframe
      src={item.src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
)}
   {item.type === 'list' && (
    <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed space-y-2 dark:text-gray-300">
     {item.items.map((listItem, i) => (
      <li key={i} dangerouslySetInnerHTML={{ __html: listItem }} />
     ))}
    </ul>
   )}
   {item.type === 'code' && (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 overflow-x-auto text-sm text-gray-800 dark:text-gray-200">
     <code>{item.value}</code>
    </pre>
   )}
   {item.type === 'file-label' && (
    <div className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md px-3 py-1 font-mono text-sm inline-block mb-2">
     {item.value}
    </div>
   )}
  </React.Fragment>
 ))}
      </motion.div>
     </div>
    </section>
   </PageTransition>
  );
 };

 export default BlogPostTemplate;