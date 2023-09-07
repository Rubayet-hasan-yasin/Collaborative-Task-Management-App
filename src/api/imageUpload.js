export const imageUpload = async img=>{
    const formData = new FormData();
    formData.append("image", img)
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_KEY}`
    const res = await fetch(url,{
        method: "POST",
        body: formData
    })
    const data = await res.json()
    return data;
}