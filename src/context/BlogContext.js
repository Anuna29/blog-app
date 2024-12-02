import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react'
import { blogsCollection, tagsCollection, usersCollection } from '../firebase';

export const BlogContext = createContext();

export const BlogContextProvider = (props) => {
  const {children} = props;
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(blogsCollection, async (collectionSnapShot) => {
      const blogPromises = collectionSnapShot.docs.map(async (blogDoc)=> {const blogData = blogDoc.data();

        const userRef = doc(usersCollection, blogData.userId);
        const userDoc = await getDoc(userRef);
        const userData = userDoc.exists() ? userDoc.data() : null;

        const tagRef = doc(tagsCollection, blogData.tagID);
        const tagDoc = await getDoc(tagRef);
        const tagData = tagDoc.exists() ? tagDoc.data() : null;

        return {
          blogID: blogDoc.id, 
          ...blogData, 
          user: userData, 
          tag: tagData, 
        };
      });

      const blogWithDetails = await Promise.all(blogPromises);

      setBlogs(blogWithDetails);
      setBlogsLoading(false);
    }
  );

    return () => unsubscribe();
  }, [])

  return (
    <BlogContext.Provider value={{blogs, blogsLoading}}>
      {children}
    </BlogContext.Provider>
  )
}

export const useBlogContext = () => {
  return useContext(BlogContext);
}