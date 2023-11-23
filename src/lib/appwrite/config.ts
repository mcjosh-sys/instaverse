import {Client, Account, Databases, Storage, Avatars} from 'appwrite'

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL,
    key: import.meta.env.VITE_APPWRITE_SECRETE_API_KEY,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    savesCollection: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
    usersCollection: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    postsCollection: import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
}

export const client = new Client();
client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);