declare module plugin {
    interface PluginProtocol {
        configDeveloperInfo(info: Object);
        setDebugMode(debug: boolean);
        getPluginName() : string;
        callFuncWithParam(funcName: string, ...params) : void;
        callStringFuncWithParam(funcName: string, ...params): string;
        callIntFuncWithParam(funcName: string, ...params) : number;
        callFloatFuncWithParam(funcName: string, ...params) : number;
        callBoolFuncWithParam(funcName: string, ...params) : boolean;
    }
    interface ProtocolAds extends PluginProtocol {
        showAds(type: number, size: number, pos: number);
        hideAds(type: number);
        setListener(l: Object);
        getListener() : Object;
    }
    interface ProtocolShare extends PluginProtocol {
        setListener(l: Object);
        getListener() : Object;
    }
    interface ProtocolUser extends PluginProtocol {
        setActionListener(l: Object);
        getActionListener() : Object;
    }
    interface ProtocolAnalytics extends PluginProtocol {
        logEvent(name: string, obj?: Object);
    }
    interface ProtocolSocialShare extends PluginProtocol {
        setListener(l: Object);
        getListener() : Object;
        showLeaderboard(id: string);
        showAchievements();
        submitScore(id: string, score: number);
        unlockAchievement(obj: Object);
    }
    interface ProtocolIAP extends PluginProtocol {
        setListener(l: Object);
        getListener() : Object;
    }
    class PluginManager {
        static getInstance(): PluginManager;
        loadPlugin(name:string): PluginProtocol;
    }
}