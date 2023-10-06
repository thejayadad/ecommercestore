import db from "@/lib/db";
import User from "@/models/User";

export async function POST(req){
    try {
        await db.connect()
        const { email} = await req.json();
        let isExising = await User.findOne({ email });

        if(isExising){
            throw new Error("User already exists")
        }
         newUser = await User.create({  email });
         const {...user} = newUser._doc
    
          return new Response(JSON.stringify(user), {status: 201})
    } catch (error) {
        return new Response(JSON.stringify(error.message), {status: 500})

    }
}