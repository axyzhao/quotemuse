const SaveData = async (data, getPosts) => {
  alert("Post submitted! It may take a moment to appear.")
  const jsonData = JSON.stringify(data)
  await fetch(`https://serverless-api.axyzhao.workers.dev/api/posts`,
    {
      method: 'POST',
      body: jsonData
    }
  )

  getPosts();

}

export default SaveData;
