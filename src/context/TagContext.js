import { createContext, useContext, useEffect, useState } from 'react'
import { tagsCollection } from '../firebase';
import { onSnapshot } from 'firebase/firestore';

export const TagContext = createContext();

export const TagContextProvider = (props) => {
  const {children} = props;
  const [tags, setTags] = useState([]);
  const [tagLoading, setTagLoading] = useState(true);

  useEffect(() => {
   const unsubscribe = onSnapshot(tagsCollection, (collection)=> {
      const tagData = collection.docs.map((doc) => ({
        ...doc.data(),
        tagId: doc.id,
      }))

      setTags(tagData);
      setTagLoading(false);
    });

    return () => unsubscribe();
  } , [])

  return (
    <TagContext.Provider value={{tags, tagLoading}}>
      {children}
    </TagContext.Provider>
  )
}

export const useTagContext = () => {
  return useContext(TagContext);
}