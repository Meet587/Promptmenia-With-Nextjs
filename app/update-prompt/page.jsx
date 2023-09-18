"use client";

import { useEffect, useState } from "react";
import Form from "@components/Form";
import { useRouter, useSearchParams } from "next/navigation";

const EditPrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const promptId = searchParams.get('id')
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(()=>{
    const getPromptDetails = async ()=>{
    }
  },[promptId])

  const editPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const responce = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (responce.ok) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={editPrompt}
    />
  );
};

export default EditPrompt;
