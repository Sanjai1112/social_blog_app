import React from "react";
import { Box } from "@chakra-ui/layout";

function Posts({posts}){
    return (
        <>
        {
            posts && posts.length > 0 ? (
                <div>
                    {
                        posts.map(post => (
                                <div key = {post.id} id = {post.userId}>
                                    <span>{post.heading}</span>
                                    <span>{post.description}</span>
                                    <span>{post.createdTime}</span>
                                    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                                        
                                    </Box>
                                </div>
                            )
                        )
                    }
                </div>
            ) : 
            (
                <div>No posts available</div>
            )   
        }
        </>
    )
}
export default Posts;