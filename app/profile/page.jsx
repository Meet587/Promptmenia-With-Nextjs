"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [post, setPost] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      const responce = await fetch(`api/users/${session?.user.id}/posts`);
      const data = await responce.json();
      setPost(data);
    };
    fetchdata();
  }, []);
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirm = confirm("Are you sure you want to delete this prompt");

    if (hasConfirm) {
      try {
        await fetch(`api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPost = post.filter((p) => p._id !== post._id);
        setPost(filteredPost)
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Profile
      name="My"
      disc="jhxczxczxczxczczczczxczxczczxcck"
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
