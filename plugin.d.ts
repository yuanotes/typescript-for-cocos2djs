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
    }
    interface ProtocolAnalytics extends PluginProtocol {
        logEvent(name: string, obj?: Object);
    }
    class PluginManager {
        static getInstance(): PluginManager;
        loadPlugin(name:string): PluginProtocol;
    }
}