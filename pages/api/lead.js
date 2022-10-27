// posts.js

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("nextjs-mongodb-demo");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("leads").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case "GET":
      const allPosts = await db.collection("allLeads").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}

export async function getServerSideProps(context) {
    let res = await fetch("http://localhost:3000/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let allPosts = await res.json();
  
    return {
      props: { allLeads },
    };
}

useEffect(() => {
    setPostsState(allLeads);
  }, [allLeads]);
  
  let submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/leads", {
      method: "POST",
      body: JSON.stringify({
        lead: lead,
        email: email,
      }),
    });
    res = await res.json();
    setPostsState([...postsState, res]);
    setLead("");
    setEmail("");
    setLoading(false);
};