import { INewUser } from "../../types";
import {account, appwriteConfig, avatars, databases} from "./config"
import {ID} from "appwrite"

export async function createUserAccount(user: INewUser){
    try{
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
        )

        if(!newAccount) throw new Error;
        
        const avatarUrl = avatars.getInitials(user.name)

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            email: newAccount.email,
            name: newAccount.name,
            imageUrl: avatarUrl,
            username: user.username
        });
        
        return newUser
    } catch (error) {
        console.log(error)
        return error
}
}

export async function saveUserToDB(user: {
    accountId: string,
    email: string,
    name: string,
    imageUrl: URL,
    username?: string
}) {

    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollection,
            ID.unique(),
            user
        )

        return newUser
    } catch (error) {
        console.log(error)
    }
    
}

export async function signInAccount(user: {email: string, password: string}) {
    try {
        const session = await account.createEmailSession(user.email, user.password)
        
        return session
    } catch (error) {
        console.log(error)
    }
}