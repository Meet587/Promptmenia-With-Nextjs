"use client";

import {useState} from "react";
import Form from "@components/Form"

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt:'',
        tag:''
    })

    const CreatePrompt = async(e)=>{

    }
  return (
    <Form
    type='Create'
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={CreatePrompt}
    />
  );
};

export default CreatePrompt;