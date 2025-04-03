/// <summary>
/// The user name in the mongo plattform
/// </summary>
export const mongoUserName = "francisco";

//The name of my only cluster on MongoDB Atlas
export const mongoClusterName = "demoCluster";

/// <summary>
/// The password for my only cluster "Project: DEMO_1/ ClusterName: DemoCluster"
/// </summary>
export const mongoClusterPassword = "IN3ihAfUZ5LWrFko";

/// <summary>
/// The name of the library database
/// </summary>
export const mongoDatabaseName = "Library";

export const mongoCollectionName = "MERN-Books"

export const mongoDBURL = "mongodb+srv://" +
    mongoUserName +
    ":" +
    mongoClusterPassword +
    "@" +
    mongoClusterName +
    ".w6bc9.mongodb.net/" +
    mongoCollectionName +
    "?retryWrites=true&w=majority&appName=DemoCluster";