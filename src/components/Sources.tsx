import { WorkDetailProps } from "../pages/work-detail/WorkDetail";
import { AgnosticData, BlankDGreyData, BlankGreyData, BookBlindDateData, ACupOfChaingRaiData, LDDData, TTimeData, HaroonData } from "./BrandingSources";
import { CreedData, Sani1Data, TTTData, KKSData, FibonacciData, TypeFounderData } from "./EditorialSources";
import { ACupOfChiangRaiFeaturedData, CreedFeaturedData, RiceitFeaturedData, TTimeFeaturedData } from "./HomeSources";
import { ArtHistoryData, IkuraData, NTMYData, RiceitData, SynPhaetData, TheWriterProjectData } from "./IllustrationSources";
import { CalmData, AloisData, DinoData, MaeliebData } from "./OthersSources";
import { LDD2Data, LinePointData, LineShoppingData, Agnostic2Data, LINEPointsAwarenessData } from "./UXUISources";

const DataMap: Map<string, WorkDetailProps> = new Map();
DataMap.set("t-time-featured", TTimeFeaturedData)
DataMap.set("riceit-featured", RiceitFeaturedData)
DataMap.set("a-cup-of-chiangrai-featured", ACupOfChiangRaiFeaturedData)
DataMap.set("creed-featured", CreedFeaturedData)

DataMap.set("line-horoscope", LDDData);
DataMap.set("t-time", TTimeData);
DataMap.set("agnostic", AgnosticData);
DataMap.set("book-blind-date", BookBlindDateData);
DataMap.set("a-cup-of-chiangrai", ACupOfChaingRaiData);
DataMap.set("haroon", HaroonData);

DataMap.set("the-writer-project", TheWriterProjectData);
DataMap.set("synphaet", SynPhaetData);
DataMap.set("ikura", IkuraData);
DataMap.set("art-history", ArtHistoryData);
DataMap.set("nice-to-meet-you", NTMYData);
DataMap.set("riceit", RiceitData);

DataMap.set("creed", CreedData);
DataMap.set("sani-system", Sani1Data);
DataMap.set("thon-thong-time", TTTData);
DataMap.set("fibonacci", FibonacciData);
DataMap.set("kor-kong-sai", KKSData);
DataMap.set("type-founder", TypeFounderData);

DataMap.set("line-horoscope2", LDD2Data);
DataMap.set("k-bank-line-points", LinePointData);
DataMap.set("line-points-back", LineShoppingData);
DataMap.set("agnostic-ui", Agnostic2Data);
DataMap.set("line-points-awareness", LINEPointsAwarenessData);

DataMap.set("calm-outdoors", CalmData);
DataMap.set("alois", AloisData);
DataMap.set("dino-clamp", DinoData);
DataMap.set("maelieb", MaeliebData);

DataMap.set("blankgrey", BlankGreyData);
DataMap.set("blankdgrey", BlankDGreyData);

export {
    DataMap
}