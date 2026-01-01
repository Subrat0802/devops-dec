import dotenv from "dotenv";
import { AutoScalingClient, SetDesiredCapacityCommand } from "@aws-sdk/client-auto-scaling";

dotenv.config();

const client = new AutoScalingClient({region: "ap-south-1", credentials: {
    accessKeyId:process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY!
}});


const command = new SetDesiredCapacityCommand({
    AutoScalingGroupName:"vscode-autoscaling-grp",
    DesiredCapacity: 1
})

const data = await client.send(command);

console.log(data);