declare module plugin {
    interface PluginProtocol {
        configDeveloperInfo(info: Object);
        setDebugMode(debug: boolean);
    }
    interface ProtocolAds extends PluginProtocol {
        showAds(type: number, size: number, pos: number);
        hideAds(type: number);
    }
    interface ProtocolAnalytics extends PluginProtocol {
        logEvent(name: string, obj: Object);
    }
    class PluginManager {
        static getInstance(): PluginManager;
        loadPlugin(name:string): PluginProtocol;
    }
}