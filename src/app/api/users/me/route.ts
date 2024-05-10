import { connect } from '@/app/dbConfig/dbConfig'
import { getDataFromToken } from '@/app/helpers/datDataFormToken'
import User from '@/app/models/useModel'
import { NextResponse, NextRequest } from 'next/server'



connect()

export async function GET(request:NextRequest){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        console.log("user--------->", user);
        
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}