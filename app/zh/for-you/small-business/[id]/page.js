import {notFound} from "next/navigation";
import BusinessCategoryPage from "../../../../components/BusinessCategoryPage";
import {content} from "../../../../components/SmallBusinessPage";
import {seoMetadata} from "../../../../seo";
export function generateStaticParams(){return Array.from({length:13},(_,i)=>({id:String(i+1)}))}
export async function generateMetadata({params}){const {id}=await params;const item=content["zh"].examples[Number(id)-1];return item?seoMetadata("zh","/for-you/small-business/"+id,item[0]+" | Kunaris",item[1]):{}}
export default async function Page({params}){const {id}=await params;if(!/^(?:[1-9]|1[0-3])$/.test(id))notFound();return <BusinessCategoryPage locale="zh" id={id}/>;}
