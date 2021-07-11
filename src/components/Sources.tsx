import { WorkDetailProps } from "../pages/work-detail/WorkDetail";
import { AgnosticData, BlankDGreyData, BlankGreyData, LDDData, TTimeData } from "./BrandingSources";
import { CreedData, Sani1Data, Sani2Data, TTTData, KKSData, HiaBupData } from "./EditorialSources";
import { ShellEcoMarathonData, SynPhaetData, TheWriterProjectData } from "./IllustrationSources";
import { CalmData, AloisData, ACupOfChaingRaiData } from "./OthersSources";
import { LDD2Data, LinePointData, LineShoppingData, Agnostic2Data } from "./UXUISources";

const DataMap: Map<string, WorkDetailProps> = new Map();
DataMap.set("line-doo-duong", LDDData);
DataMap.set("t-time", TTimeData);
DataMap.set("agnostic", AgnosticData);

DataMap.set("the-writer-project", TheWriterProjectData);
DataMap.set("shell-eco-marathon", ShellEcoMarathonData);
DataMap.set("synphaet", SynPhaetData);

DataMap.set("creed", CreedData);
DataMap.set("sani-system", Sani1Data);
DataMap.set("sani-system2", Sani2Data);
DataMap.set("thon-thong-time", TTTData);
DataMap.set("korkongsai", KKSData);
DataMap.set("hiabup", HiaBupData);

DataMap.set("line-doo-duong2", LDD2Data);
DataMap.set("k-bank-line-points", LinePointData);
DataMap.set("line-points-back", LineShoppingData);
DataMap.set("agnostic-ui", Agnostic2Data);

DataMap.set("calm-outdoors", CalmData);
DataMap.set("alois", AloisData);
DataMap.set("a-cup-of-chiangrai", ACupOfChaingRaiData);

DataMap.set("blankgrey", BlankGreyData);
DataMap.set("blankdgrey", BlankDGreyData);

export {
    DataMap
}