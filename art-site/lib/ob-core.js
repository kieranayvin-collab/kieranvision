
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const {FileLoader: $a0PbU$FileLoader, TextureLoader: $a0PbU$TextureLoader, GLSL3: $a0PbU$GLSL3, RepeatWrapping: $a0PbU$RepeatWrapping, UniformsLib: $a0PbU$UniformsLib, RawShaderMaterial: $a0PbU$RawShaderMaterial, Loader: $a0PbU$Loader, Vector4: $a0PbU$Vector4, Vector3: $a0PbU$Vector3, Clock: $a0PbU$Clock} = THREE;


class $cf098bb13503440d$export$bcc22bf437a07d8f extends $a0PbU$Loader {
    constructor(manager){
        super(manager);
        this.loadedMaterials = {};
    }
    async load(brushName, onLoad, onProgress, onError) {
        const scope = this;
        const isAlreadyLoaded = this.loadedMaterials[brushName];
        if (isAlreadyLoaded !== undefined) {
            onLoad(scope.parse(isAlreadyLoaded));
            return;
        }
        const loader = new (0, $a0PbU$FileLoader)(this.manager);
        loader.setPath(this.path);
        loader.setResponseType("text");
        loader.setWithCredentials(this.withCredentials);
        const textureLoader = new (0, $a0PbU$TextureLoader)(this.manager);
        textureLoader.setPath(this.path);
        textureLoader.setWithCredentials(this.withCredentials);
        const materialParams = $cf098bb13503440d$var$tiltBrushMaterialParams[brushName];
        window.__fix(brushName, materialParams);
        materialParams.glslVersion = (0, $a0PbU$GLSL3);
        materialParams.vertexShader = await window.__bt(materialParams.vertexShader);
        materialParams.fragmentShader = await window.__bt(materialParams.fragmentShader);
        if (materialParams.uniforms.u_MainTex) {
            const mainTex = await window.__tx(materialParams.uniforms.u_MainTex.value);
            mainTex.name = `${brushName}_MainTex`;
            mainTex.wrapS = (0, $a0PbU$RepeatWrapping);
            mainTex.wrapT = (0, $a0PbU$RepeatWrapping);
            mainTex.flipY = false;
            materialParams.uniforms.u_MainTex.value = mainTex;
        }
        if (materialParams.uniforms.u_BumpMap) {
            const bumpMap = await window.__tx(materialParams.uniforms.u_BumpMap.value);
            bumpMap.name = `${brushName}_BumpMap`;
            bumpMap.wrapS = (0, $a0PbU$RepeatWrapping);
            bumpMap.wrapT = (0, $a0PbU$RepeatWrapping);
            bumpMap.flipY = false;
            materialParams.uniforms.u_BumpMap.value = bumpMap;
        }
        if (materialParams.uniforms.u_AlphaMask) {
            const alphaMask = await window.__tx(materialParams.uniforms.u_AlphaMask.value);
            alphaMask.name = `${brushName}_AlphaMask`;
            alphaMask.wrapS = (0, $a0PbU$RepeatWrapping);
            alphaMask.wrapT = (0, $a0PbU$RepeatWrapping);
            alphaMask.flipY = false;
            materialParams.uniforms.u_AlphaMask.value = alphaMask;
        }
        for(var lightType in (0, $a0PbU$UniformsLib).lights)materialParams.uniforms[lightType] = (0, $a0PbU$UniformsLib).lights[lightType];
        for(var fogType in (0, $a0PbU$UniformsLib).fog)materialParams.uniforms[fogType] = (0, $a0PbU$UniformsLib).fog[fogType];
        let rawMaterial = new (0, $a0PbU$RawShaderMaterial)(materialParams);
        this.loadedMaterials[brushName] = rawMaterial;
        onLoad(scope.parse(rawMaterial));
    }
    parse(rawMaterial) {
        return rawMaterial;
    }
    lookupMaterialParams(materialName) {
        return $cf098bb13503440d$var$tiltBrushMaterialParams[materialName] || null;
    }
    lookupMaterialName(nameOrGuid) {
        if (nameOrGuid?.startsWith("ob-")) nameOrGuid = nameOrGuid.substring(3);
        switch(nameOrGuid){
            case "BlocksBasic:":
            case "BlocksPaper":
            case "0e87b49c-6546-3a34-3a44-8a556d7d6c3e":
                return "BlocksBasic";
            case "BlocksGem":
            case "232998f8-d357-47a2-993a-53415df9be10":
                return "BlocksGem";
            case "BlocksGlass":
            case "3d813d82-5839-4450-8ddc-8e889ecd96c7":
                return "BlocksGlass";
            case "Bubbles":
            case "89d104cd-d012-426b-b5b3-bbaee63ac43c":
                return "Bubbles";
            case "CelVinyl":
            case "700f3aa8-9a7c-2384-8b8a-ea028905dd8c":
                return "CelVinyl";
            case "ChromaticWave":
            case "0f0ff7b2-a677-45eb-a7d6-0cd7206f4816":
                return "ChromaticWave";
            case "CoarseBristles":
            case "1161af82-50cf-47db-9706-0c3576d43c43":
            case "79168f10-6961-464a-8be1-57ed364c5600":
                return "CoarseBristles";
            case "Comet":
            case "1caa6d7d-f015-3f54-3a4b-8b5354d39f81":
                return "Comet";
            case "DiamondHull":
            case "c8313697-2563-47fc-832e-290f4c04b901":
                return "DiamondHull";
            case "Disco":
            case "4391aaaa-df73-4396-9e33-31e4e4930b27":
                return "Disco";
            case "DotMarker":
            case "d1d991f2-e7a0-4cf1-b328-f57e915e6260":
                return "DotMarker";
            case "Dots":
            case "6a1cf9f9-032c-45ec-9b1d-a6680bee30f7":
                return "Dots";
            case "DoubleTaperedFlat":
            case "0d3889f3-3ede-470c-8af4-f44813306126":
                return "DoubleTaperedFlat";
            case "DoubleTaperedMarker":
            case "0d3889f3-3ede-470c-8af4-de4813306126":
                return "DoubleTaperedMarker";
            case "DuctTape":
            case "d0262945-853c-4481-9cbd-88586bed93cb":
            case "3ca16e2f-bdcd-4da2-8631-dcef342f40f1":
                return "DuctTape";
            case "Electricity":
            case "f6e85de3-6dcc-4e7f-87fd-cee8c3d25d51":
                return "Electricity";
            case "Embers":
            case "02ffb866-7fb2-4d15-b761-1012cefb1360":
                return "Embers";
            case "EnvironmentDiffuse":
            case "0ad58bbd-42bc-484e-ad9a-b61036ff4ce7":
                return "EnvironmentDiffuse";
            case "EnvironmentDiffuseLightMap":
            case "d01d9d6c-9a61-4aba-8146-5891fafb013b":
                return "EnvironmentDiffuseLightMap";
            case "Fire":
            case "cb92b597-94ca-4255-b017-0e3f42f12f9e":
                return "Fire";
            case "2d35bcf0-e4d8-452c-97b1-3311be063130":
            case "280c0a7a-aad8-416c-a7d2-df63d129ca70":
            case "55303bc4-c749-4a72-98d9-d23e68e76e18":
            case "Flat":
                return "Flat";
            case "cf019139-d41c-4eb0-a1d0-5cf54b0a42f3":
            case "Highlighter":
            case "geometry_Highlighter":
                return "Highlighter";
            case "Hypercolor":
            case "dce872c2-7b49-4684-b59b-c45387949c5c":
            case "e8ef32b1-baa8-460a-9c2c-9cf8506794f5":
                return "Hypercolor";
            case "HyperGrid":
            case "6a1cf9f9-032c-45ec-9b6e-a6680bee32e9":
                return "HyperGrid";
            case "Icing":
            case "2f212815-f4d3-c1a4-681a-feeaf9c6dc37":
                return "Icing";
            case "Ink":
            case "f5c336cf-5108-4b40-ade9-c687504385ab":
            case "c0012095-3ffd-4040-8ee1-fc180d346eaa":
                return "Ink";
            case "Leaves":
            case "4a76a27a-44d8-4bfe-9a8c-713749a499b0":
            case "ea19de07-d0c0-4484-9198-18489a3c1487":
                return "Leaves";
            case "Light":
            case "2241cd32-8ba2-48a5-9ee7-2caef7e9ed62":
                return "Light";
            case "LightWire":
            case "4391aaaa-df81-4396-9e33-31e4e4930b27":
                return "LightWire";
            case "Lofted":
            case "d381e0f5-3def-4a0d-8853-31e9200bcbda":
                return "Lofted";
            case "Marker":
            case "429ed64a-4e97-4466-84d3-145a861ef684":
                return "Marker";
            case "MatteHull":
            case "79348357-432d-4746-8e29-0e25c112e3aa":
                return "MatteHull";
            case "NeonPulse":
            case "b2ffef01-eaaa-4ab5-aa64-95a2c4f5dbc6":
                return "NeonPulse";
            case "OilPaint":
            case "f72ec0e7-a844-4e38-82e3-140c44772699":
            case "c515dad7-4393-4681-81ad-162ef052241b":
                return "OilPaint";
            case "Paper":
            case "f1114e2e-eb8d-4fde-915a-6e653b54e9f5":
            case "759f1ebd-20cd-4720-8d41-234e0da63716":
                return "Paper";
            case "PbrTemplate":
            case "f86a096c-2f4f-4f9d-ae19-81b99f2944e0":
                return "PbrTemplate";
            case "PbrTransparentTemplate":
            case "19826f62-42ac-4a9e-8b77-4231fbd0cfbf":
                return "PbrTransparentTemplate";
            case "Petal":
            case "e0abbc80-0f80-e854-4970-8924a0863dcc":
                return "Petal";
            case "Plasma":
            case "c33714d1-b2f9-412e-bd50-1884c9d46336":
                return "Plasma";
            case "Rainbow":
            case "ad1ad437-76e2-450d-a23a-e17f8310b960":
                return "Rainbow";
            case "ShinyHull":
            case "faaa4d44-fcfb-4177-96be-753ac0421ba3":
                return "ShinyHull";
            case "Smoke":
            case "70d79cca-b159-4f35-990c-f02193947fe8":
                return "Smoke";
            case "Snow":
            case "d902ed8b-d0d1-476c-a8de-878a79e3a34c":
                return "Snow";
            case "SoftHighlighter":
            case "accb32f5-4509-454f-93f8-1df3fd31df1b":
                return "SoftHighlighter";
            case "Spikes":
            case "cf7f0059-7aeb-53a4-2b67-c83d863a9ffa":
                return "Spikes";
            case "Splatter":
            case "8dc4a70c-d558-4efd-a5ed-d4e860f40dc3":
            case "7a1c8107-50c5-4b70-9a39-421576d6617e":
                return "Splatter";
            case "Stars":
            case "0eb4db27-3f82-408d-b5a1-19ebd7d5b711":
                return "Stars";
            case "Streamers":
            case "44bb800a-fbc3-4592-8426-94ecb05ddec3":
                return "Streamers";
            case "Taffy":
            case "0077f88c-d93a-42f3-b59b-b31c50cdb414":
                return "Taffy";
            case "TaperedFlat":
            case "b468c1fb-f254-41ed-8ec9-57030bc5660c":
            case "c8ccb53d-ae13-45ef-8afb-b730d81394eb":
                return "TaperedFlat";
            case "TaperedMarker":
            case "d90c6ad8-af0f-4b54-b422-e0f92abe1b3c":
            case "1a26b8c0-8a07-4f8a-9fac-d2ef36e0cad0":
                return "TaperedMarker";
            case "ThickPaint":
            case "75b32cf0-fdd6-4d89-a64b-e2a00b247b0f":
            case "fdf0326a-c0d1-4fed-b101-9db0ff6d071f":
                return "ThickPaint";
            case "Toon":
            case "4391385a-df73-4396-9e33-31e4e4930b27":
                return "Toon";
            case "UnlitHull":
            case "a8fea537-da7c-4d4b-817f-24f074725d6d":
                return "UnlitHull";
            case "VelvetInk":
            case "d229d335-c334-495a-a801-660ac8a87360":
                return "VelvetInk";
            case "Waveform":
            case "10201aa3-ebc2-42d8-84b7-2e63f6eeb8ab":
                return "Waveform";
            case "WetPaint":
            case "b67c0e81-ce6d-40a8-aeb0-ef036b081aa3":
            case "dea67637-cd1a-27e4-c9b1-52f4bbcb84e5":
                return "WetPaint";
            case "WigglyGraphite":
            case "5347acf0-a8e2-47b6-8346-30c70719d763":
            case "e814fef1-97fd-7194-4a2f-50c2bb918be2":
                return "WigglyGraphite";
            case "Wire":
            case "4391385a-cf83-4396-9e33-31e4e4930b27":
                return "Wire";
            case "cf3401b3-4ada-4877-995a-1aa64e7b604a":
            case "SvgTemplate":
                return "SvgTemplate";
            case "1b897b7e-9b76-425a-b031-a867c48df409":
            case "4465b5ef-3605-bec4-2b3e-6b04508ddb6b":
            case "Gouache":
                return "Gouache";
            case "8e58ceea-7830-49b4-aba9-6215104ab52a":
            case "MylarTube":
                return "MylarTube";
            case "03a529e1-f519-3dd4-582d-2d5cd92c3f4f":
            case "Rain":
                return "Rain";
            case "725f4c6a-6427-6524-29ab-da371924adab":
            case "DryBrush":
                return "DryBrush";
            case "ddda8745-4bb5-ac54-88b6-d1480370583e":
            case "LeakyPen":
                return "LeakyPen";
            case "50e99447-3861-05f4-697d-a1b96e771b98":
            case "Sparks":
                return "Sparks";
            case "7136a729-1aab-bd24-f8b2-ca88b6adfb67":
            case "Wind":
                return "Wind";
            case "a8147ce1-005e-abe4-88e8-09a1eaadcc89":
            case "Rising Bubbles":
                return "Rising Bubbles";
            case "9568870f-8594-60f4-1b20-dfbc8a5eac0e":
            case "TaperedWire":
                return "TaperedWire";
            case "2e03b1bf-3ebd-4609-9d7e-f4cafadc4dfa":
            case "SquarePaper":
                return "SquarePaper";
            case "39ee7377-7a9e-47a7-a0f8-0c77712f75d3":
            case "ThickGeometry":
                return "ThickGeometry";
            case "2c1a6a63-6552-4d23-86d7-58f6fba8581b":
            case "Wireframe":
                return "Wireframe";
            case "61d2ef63-ed60-49b3-85fb-7267b7d234f2":
            case "CandyCane":
                return "CandyCane";
            case "20a0bf1a-a96e-44e5-84ac-9823d2d65023":
            case "HolidayTree":
                return "HolidayTree";
            case "2b65cd94-9259-4f10-99d2-d54b6664ac33":
            case "Snowflake":
                return "Snowflake";
            case "22d4f434-23e4-49d9-a9bd-05798aa21e58":
            case "Braid3":
                return "Braid3";
            case "f28c395c-a57d-464b-8f0b-558c59478fa3":
            case "Muscle":
                return "Muscle";
            case "99aafe96-1645-44cd-99bd-979bc6ef37c5":
            case "Guts":
                return "Guts";
            case "53d753ef-083c-45e1-98e7-4459b4471219":
            case "Fire2":
                return "Fire2";
            case "9871385a-df73-4396-9e33-31e4e4930b27":
            case "TubeToonInverted":
                return "TubeToonInverted";
            case "4391ffaa-df73-4396-9e33-31e4e4930b27":
            case "FacetedTube":
                return "FacetedTube";
            case "6a1cf9f9-032c-45ec-9b6e-a6680bee30f7":
            case "WaveformParticles":
                return "WaveformParticles";
            case "eba3f993-f9a1-4d35-b84e-bb08f48981a4":
            case "BubbleWand":
                return "BubbleWand";
            case "6a1cf9f9-032c-45ec-311e-a6680bee32e9":
            case "DanceFloor":
                return "DanceFloor";
            case "0f5820df-cb6b-4a6c-960e-56e4c8000eda":
            case "WaveformTube":
                return "WaveformTube";
            case "492b36ff-b337-436a-ba5f-1e87ee86747e":
            case "Drafting":
                return "Drafting";
            case "f0a2298a-be80-432c-9fee-a86dcc06f4f9":
            case "SingleSided":
                return "SingleSided";
            case "f4a0550c-332a-4e1a-9793-b71508f4a454":
            case "DoubleFlat":
                return "DoubleFlat";
            case "c1c9b26d-673a-4dc6-b373-51715654ab96":
            case "TubeAdditive":
                return "TubeAdditive";
            case "a555b809-2017-46cb-ac26-e63173d8f45e":
            case "Feather":
                return "Feather";
            case "84d5bbb2-6634-8434-f8a7-681b576b4664":
            case "DuctTapeGeometry":
                return "DuctTapeGeometry";
            case "3d9755da-56c7-7294-9b1d-5ec349975f52":
            case "TaperedHueShift":
                return "TaperedHueShift";
            case "1cf94f63-f57a-4a1a-ad14-295af4f5ab5c":
            case "Lacewing":
                return "Lacewing";
            case "c86c058d-1bda-2e94-08db-f3d6a96ac4a1":
            case "Marbled Rainbow":
                return "Marbled Rainbow";
            case "fde6e778-0f7a-e584-38d6-89d44cee59f6":
            case "Charcoal":
                return "Charcoal";
            case "f8ba3d18-01fc-4d7b-b2d9-b99d10b8e7cf":
            case "KeijiroTube":
                return "KeijiroTube";
            case "c5da2e70-a6e4-63a4-898c-5cfedef09c97":
            case "Lofted (Hue Shift)":
                return "Lofted (Hue Shift)";
            case "62fef968-e842-3224-4a0e-1fdb7cfb745c":
            case "Wire (Lit)":
                return "Wire (Lit)";
            case "d120944d-772f-4062-99c6-46a6f219eeaf":
            case "WaveformFFT":
                return "WaveformFFT";
            case "d9cc5e99-ace1-4d12-96e0-4a7c18c99cfc":
            case "Fairy":
                return "Fairy";
            case "bdf65db2-1fb7-4202-b5e0-c6b5e3ea851e":
            case "Space":
                return "Space";
            case "30cb9af6-be41-4872-8f3e-cbff63fe3db8":
            case "Digital":
                return "Digital";
            case "abfbb2aa-70b4-4a5c-8126-8eedda2b3628":
            case "Race":
                return "Race";
            case "355b3579-bf1d-4ff5-a200-704437fe684b":
            case "SmoothHull":
                return "SmoothHull";
            case "7259cce5-41c1-ec74-c885-78af28a31d95":
            case "Leaves2":
                return "Leaves2";
            case "7c972c27-d3c2-8af4-7bf8-5d9db8f0b7bb":
            case "InkGeometry":
                return "InkGeometry";
            case "7ae1f880-a517-44a0-99f9-1cab654498c6":
            case "ConcaveHull":
                return "ConcaveHull";
            case "d3f3b18a-da03-f694-b838-28ba8e749a98":
            case "3D Printing Brush":
                return "3D Printing Brush";
            case "cc131ff8-0d17-4677-93e0-d7cd19fea9ac":
            case "PassthroughHull":
                return "PassthroughHull";
        }
    }
}
const $cf098bb13503440d$var$tiltBrushMaterialParams = {
    "BlocksBasic": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_Shininess: {
                value: 0.2
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0.1960784, 0.1960784, 0.1960784)
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "BlocksBasic-0e87b49c-6546-3a34-3a44-8a556d7d6c3e/BlocksBasic-0e87b49c-6546-3a34-3a44-8a556d7d6c3e-v10.0-vertex.glsl",
        fragmentShader: "BlocksBasic-0e87b49c-6546-3a34-3a44-8a556d7d6c3e/BlocksBasic-0e87b49c-6546-3a34-3a44-8a556d7d6c3e-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "BlocksGem": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_Color: {
                value: new (0, $a0PbU$Vector4)(1, 1, 1, 1)
            },
            u_Shininess: {
                value: 0.9
            },
            u_RimIntensity: {
                value: 0.5
            },
            u_RimPower: {
                value: 2
            },
            u_Frequency: {
                value: 2
            },
            u_Jitter: {
                value: 1
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "BlocksGem-232998f8-d357-47a2-993a-53415df9be10/BlocksGem-232998f8-d357-47a2-993a-53415df9be10-v10.0-vertex.glsl",
        fragmentShader: "BlocksGem-232998f8-d357-47a2-993a-53415df9be10/BlocksGem-232998f8-d357-47a2-993a-53415df9be10-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "BlocksGlass": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_Color: {
                value: new (0, $a0PbU$Vector4)(1, 1, 1, 1)
            },
            u_Shininess: {
                value: 0.8
            },
            u_RimIntensity: {
                value: 0.7
            },
            u_RimPower: {
                value: 4
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "BlocksGlass-3d813d82-5839-4450-8ddc-8e889ecd96c7/BlocksGlass-3d813d82-5839-4450-8ddc-8e889ecd96c7-v10.0-vertex.glsl",
        fragmentShader: "BlocksGlass-3d813d82-5839-4450-8ddc-8e889ecd96c7/BlocksGlass-3d813d82-5839-4450-8ddc-8e889ecd96c7-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "Bubbles": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "Bubbles-89d104cd-d012-426b-b5b3-bbaee63ac43c/Bubbles-89d104cd-d012-426b-b5b3-bbaee63ac43c-v10.0-MainTex.png"
            }
        },
        vertexShader: "Bubbles-89d104cd-d012-426b-b5b3-bbaee63ac43c/Bubbles-89d104cd-d012-426b-b5b3-bbaee63ac43c-v10.0-vertex.glsl",
        fragmentShader: "Bubbles-89d104cd-d012-426b-b5b3-bbaee63ac43c/Bubbles-89d104cd-d012-426b-b5b3-bbaee63ac43c-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "CelVinyl": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_Cutoff: {
                value: 0.554
            },
            u_MainTex: {
                value: "CelVinyl-700f3aa8-9a7c-2384-8b8a-ea028905dd8c/CelVinyl-700f3aa8-9a7c-2384-8b8a-ea028905dd8c-v10.0-MainTex.png"
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "CelVinyl-700f3aa8-9a7c-2384-8b8a-ea028905dd8c/CelVinyl-700f3aa8-9a7c-2384-8b8a-ea028905dd8c-v10.0-vertex.glsl",
        fragmentShader: "CelVinyl-700f3aa8-9a7c-2384-8b8a-ea028905dd8c/CelVinyl-700f3aa8-9a7c-2384-8b8a-ea028905dd8c-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "ChromaticWave": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_EmissionGain: {
                value: 0.45
            }
        },
        vertexShader: "ChromaticWave-0f0ff7b2-a677-45eb-a7d6-0cd7206f4816/ChromaticWave-0f0ff7b2-a677-45eb-a7d6-0cd7206f4816-v10.0-vertex.glsl",
        fragmentShader: "ChromaticWave-0f0ff7b2-a677-45eb-a7d6-0cd7206f4816/ChromaticWave-0f0ff7b2-a677-45eb-a7d6-0cd7206f4816-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 5,
        blendDstAlpha: 201,
        blendDst: 201,
        blendEquationAlpha: 100,
        blendEquation: 100,
        blendSrcAlpha: 201,
        blendSrc: 201
    },
    "CoarseBristles": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_MainTex: {
                value: "CoarseBristles-1161af82-50cf-47db-9706-0c3576d43c43/CoarseBristles-1161af82-50cf-47db-9706-0c3576d43c43-v10.0-MainTex.png"
            },
            u_Cutoff: {
                value: 0.25
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "CoarseBristles-1161af82-50cf-47db-9706-0c3576d43c43/CoarseBristles-1161af82-50cf-47db-9706-0c3576d43c43-v10.0-vertex.glsl",
        fragmentShader: "CoarseBristles-1161af82-50cf-47db-9706-0c3576d43c43/CoarseBristles-1161af82-50cf-47db-9706-0c3576d43c43-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Comet": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81/Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81-v10.0-MainTex.png"
            },
            u_AlphaMask: {
                value: "Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81/Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81-v10.0-AlphaMask.png"
            },
            u_AlphaMask_TexelSize: {
                value: new (0, $a0PbU$Vector4)(0.0156, 1, 64, 1)
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_Speed: {
                value: 1
            },
            u_EmissionGain: {
                value: 0.5
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81/Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81-v10.0-vertex.glsl",
        fragmentShader: "Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81/Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "DiamondHull": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_MainTex: {
                value: "DiamondHull-c8313697-2563-47fc-832e-290f4c04b901/DiamondHull-c8313697-2563-47fc-832e-290f4c04b901-v10.0-MainTex.png"
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            cameraPosition: {
                value: new (0, $a0PbU$Vector3)()
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "DiamondHull-c8313697-2563-47fc-832e-290f4c04b901/DiamondHull-c8313697-2563-47fc-832e-290f4c04b901-v10.0-vertex.glsl",
        fragmentShader: "DiamondHull-c8313697-2563-47fc-832e-290f4c04b901/DiamondHull-c8313697-2563-47fc-832e-290f4c04b901-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 5,
        blendDstAlpha: 201,
        blendDst: 201,
        blendEquationAlpha: 100,
        blendEquation: 100,
        blendSrcAlpha: 201,
        blendSrc: 201
    },
    "Disco": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_Shininess: {
                value: 0.65
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0.5147059, 0.5147059, 0.5147059)
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Disco-4391aaaa-df73-4396-9e33-31e4e4930b27/Disco-4391aaaa-df73-4396-9e33-31e4e4930b27-v10.0-vertex.glsl",
        fragmentShader: "Disco-4391aaaa-df73-4396-9e33-31e4e4930b27/Disco-4391aaaa-df73-4396-9e33-31e4e4930b27-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "DotMarker": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "DotMarker-d1d991f2-e7a0-4cf1-b328-f57e915e6260/DotMarker-d1d991f2-e7a0-4cf1-b328-f57e915e6260-v10.0-MainTex.png"
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "DotMarker-d1d991f2-e7a0-4cf1-b328-f57e915e6260/DotMarker-d1d991f2-e7a0-4cf1-b328-f57e915e6260-v10.0-vertex.glsl",
        fragmentShader: "DotMarker-d1d991f2-e7a0-4cf1-b328-f57e915e6260/DotMarker-d1d991f2-e7a0-4cf1-b328-f57e915e6260-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Dots": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "Dots-6a1cf9f9-032c-45ec-9b1d-a6680bee30f7/Dots-6a1cf9f9-032c-45ec-9b1d-a6680bee30f7-v10.0-MainTex.png"
            },
            u_TintColor: {
                value: new (0, $a0PbU$Vector4)(1, 1, 1, 1)
            },
            u_EmissionGain: {
                value: 300
            },
            u_BaseGain: {
                value: 0.4
            }
        },
        vertexShader: "Dots-6a1cf9f9-032c-45ec-9b1d-a6680bee30f7/Dots-6a1cf9f9-032c-45ec-9b1d-a6680bee30f7-v10.0-vertex.glsl",
        fragmentShader: "Dots-6a1cf9f9-032c-45ec-9b1d-a6680bee30f7/Dots-6a1cf9f9-032c-45ec-9b1d-a6680bee30f7-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "DoubleTaperedFlat": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_Shininess: {
                value: 0.1500
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0, 0, 0)
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "DoubleTaperedFlat-0d3889f3-3ede-470c-8af4-f44813306126/DoubleTaperedFlat-0d3889f3-3ede-470c-8af4-f44813306126-v10.0-vertex.glsl",
        fragmentShader: "DoubleTaperedFlat-0d3889f3-3ede-470c-8af4-f44813306126/DoubleTaperedFlat-0d3889f3-3ede-470c-8af4-f44813306126-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "DoubleTaperedMarker": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "DoubleTaperedMarker-0d3889f3-3ede-470c-8af4-de4813306126/DoubleTaperedMarker-0d3889f3-3ede-470c-8af4-de4813306126-v10.0-vertex.glsl",
        fragmentShader: "DoubleTaperedMarker-0d3889f3-3ede-470c-8af4-de4813306126/DoubleTaperedMarker-0d3889f3-3ede-470c-8af4-de4813306126-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "DuctTape": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0.5372549, 0.5372549, 0.5372549)
            },
            u_Shininess: {
                value: 0.414
            },
            u_MainTex: {
                value: "DuctTape-3ca16e2f-bdcd-4da2-8631-dcef342f40f1/DuctTape-3ca16e2f-bdcd-4da2-8631-dcef342f40f1-v10.0-MainTex.png"
            },
            u_Cutoff: {
                value: 0.2
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_BumpMap: {
                value: "DuctTape-3ca16e2f-bdcd-4da2-8631-dcef342f40f1/DuctTape-3ca16e2f-bdcd-4da2-8631-dcef342f40f1-v10.0-BumpMap.png"
            },
            u_BumpMap_TexelSize: {
                value: new (0, $a0PbU$Vector4)(0.0010, 0.0078, 1024, 128)
            }
        },
        vertexShader: "DuctTape-d0262945-853c-4481-9cbd-88586bed93cb/DuctTape-d0262945-853c-4481-9cbd-88586bed93cb-v10.0-vertex.glsl",
        fragmentShader: "DuctTape-d0262945-853c-4481-9cbd-88586bed93cb/DuctTape-d0262945-853c-4481-9cbd-88586bed93cb-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Electricity": {
        uniforms: {
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_DisplacementIntensity: {
                value: 2.0
            },
            u_EmissionGain: {
                value: 0.2
            }
        },
        vertexShader: "Electricity-f6e85de3-6dcc-4e7f-87fd-cee8c3d25d51/Electricity-f6e85de3-6dcc-4e7f-87fd-cee8c3d25d51-v10.0-vertex.glsl",
        fragmentShader: "Electricity-f6e85de3-6dcc-4e7f-87fd-cee8c3d25d51/Electricity-f6e85de3-6dcc-4e7f-87fd-cee8c3d25d51-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "Embers": {
        uniforms: {
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_ScrollRate: {
                value: 0.6
            },
            u_ScrollDistance: {
                value: new (0, $a0PbU$Vector3)(-0.2, 0.6, 0)
            },
            u_ScrollJitterIntensity: {
                value: 0.03
            },
            u_ScrollJitterFrequency: {
                value: 5
            },
            u_TintColor: {
                value: new (0, $a0PbU$Vector4)(1, 1, 1, 1)
            },
            u_MainTex: {
                value: "Embers-02ffb866-7fb2-4d15-b761-1012cefb1360/Embers-02ffb866-7fb2-4d15-b761-1012cefb1360-v10.0-MainTex.png"
            },
            u_Cutoff: {
                value: 0.2
            }
        },
        vertexShader: "Embers-02ffb866-7fb2-4d15-b761-1012cefb1360/Embers-02ffb866-7fb2-4d15-b761-1012cefb1360-v10.0-vertex.glsl",
        fragmentShader: "Embers-02ffb866-7fb2-4d15-b761-1012cefb1360/Embers-02ffb866-7fb2-4d15-b761-1012cefb1360-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "EnvironmentDiffuse": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0, 0, 0)
            },
            u_Shininess: {
                value: 0.1500
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_Cutoff: {
                value: 0.2
            }
        },
        vertexShader: "EnvironmentDiffuse-0ad58bbd-42bc-484e-ad9a-b61036ff4ce7/EnvironmentDiffuse-0ad58bbd-42bc-484e-ad9a-b61036ff4ce7-v1.0-vertex.glsl",
        fragmentShader: "EnvironmentDiffuse-0ad58bbd-42bc-484e-ad9a-b61036ff4ce7/EnvironmentDiffuse-0ad58bbd-42bc-484e-ad9a-b61036ff4ce7-v1.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "EnvironmentDiffuseLightMap": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0, 0, 0)
            },
            u_Shininess: {
                value: 0.1500
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_Cutoff: {
                value: 0.2
            }
        },
        vertexShader: "EnvironmentDiffuseLightMap-d01d9d6c-9a61-4aba-8146-5891fafb013b/EnvironmentDiffuseLightMap-d01d9d6c-9a61-4aba-8146-5891fafb013b-v1.0-vertex.glsl",
        fragmentShader: "EnvironmentDiffuseLightMap-d01d9d6c-9a61-4aba-8146-5891fafb013b/EnvironmentDiffuseLightMap-d01d9d6c-9a61-4aba-8146-5891fafb013b-v1.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Fire": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "Fire-cb92b597-94ca-4255-b017-0e3f42f12f9e/Fire-cb92b597-94ca-4255-b017-0e3f42f12f9e-v10.0-MainTex.png"
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_EmissionGain: {
                value: 0.5
            }
        },
        vertexShader: "Fire-cb92b597-94ca-4255-b017-0e3f42f12f9e/Fire-cb92b597-94ca-4255-b017-0e3f42f12f9e-v10.0-vertex.glsl",
        fragmentShader: "Fire-cb92b597-94ca-4255-b017-0e3f42f12f9e/Fire-cb92b597-94ca-4255-b017-0e3f42f12f9e-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 5,
        blendDstAlpha: 201,
        blendDst: 201,
        blendEquationAlpha: 100,
        blendEquation: 100,
        blendSrcAlpha: 201,
        blendSrc: 201
    },
    "Flat": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_Cutoff: {
                value: 0.2
            }
        },
        vertexShader: "Flat-2d35bcf0-e4d8-452c-97b1-3311be063130/Flat-2d35bcf0-e4d8-452c-97b1-3311be063130-v10.0-vertex.glsl",
        fragmentShader: "Flat-2d35bcf0-e4d8-452c-97b1-3311be063130/Flat-2d35bcf0-e4d8-452c-97b1-3311be063130-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 5,
        blendDstAlpha: 201,
        blendDst: 201,
        blendEquationAlpha: 100,
        blendEquation: 100,
        blendSrcAlpha: 201,
        blendSrc: 201
    },
    "Highlighter": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "Highlighter-cf019139-d41c-4eb0-a1d0-5cf54b0a42f3/Highlighter-cf019139-d41c-4eb0-a1d0-5cf54b0a42f3-v10.0-MainTex.png"
            },
            u_Cutoff: {
                value: 0.12
            }
        },
        vertexShader: "Highlighter-cf019139-d41c-4eb0-a1d0-5cf54b0a42f3/Highlighter-cf019139-d41c-4eb0-a1d0-5cf54b0a42f3-v10.0-vertex.glsl",
        fragmentShader: "Highlighter-cf019139-d41c-4eb0-a1d0-5cf54b0a42f3/Highlighter-cf019139-d41c-4eb0-a1d0-5cf54b0a42f3-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "Hypercolor": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_Shininess: {
                value: 0.5
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0.2745098, 0.2745098, 0.2745098)
            },
            u_MainTex: {
                value: "Hypercolor-dce872c2-7b49-4684-b59b-c45387949c5c/Hypercolor-dce872c2-7b49-4684-b59b-c45387949c5c-v10.0-MainTex.png"
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_Cutoff: {
                value: 0.5
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_BumpMap: {
                value: "Hypercolor-dce872c2-7b49-4684-b59b-c45387949c5c/Hypercolor-dce872c2-7b49-4684-b59b-c45387949c5c-v10.0-BumpMap.png"
            },
            u_BumpMap_TexelSize: {
                value: new (0, $a0PbU$Vector4)(0.0010, 0.0078, 1024, 128)
            }
        },
        vertexShader: "Hypercolor-dce872c2-7b49-4684-b59b-c45387949c5c/Hypercolor-dce872c2-7b49-4684-b59b-c45387949c5c-v10.0-vertex.glsl",
        fragmentShader: "Hypercolor-dce872c2-7b49-4684-b59b-c45387949c5c/Hypercolor-dce872c2-7b49-4684-b59b-c45387949c5c-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "HyperGrid": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_TintColor: {
                value: new (0, $a0PbU$Vector4)(1, 1, 1, 1)
            },
            u_MainTex: {
                value: "HyperGrid-6a1cf9f9-032c-45ec-9b6e-a6680bee32e9/HyperGrid-6a1cf9f9-032c-45ec-9b6e-a6680bee32e9-v10.0-MainTex.png"
            }
        },
        vertexShader: "HyperGrid-6a1cf9f9-032c-45ec-9b6e-a6680bee32e9/HyperGrid-6a1cf9f9-032c-45ec-9b6e-a6680bee32e9-v10.0-vertex.glsl",
        fragmentShader: "HyperGrid-6a1cf9f9-032c-45ec-9b6e-a6680bee32e9/HyperGrid-6a1cf9f9-032c-45ec-9b6e-a6680bee32e9-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "Icing": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0.2352941, 0.2352941, 0.2352941)
            },
            u_Shininess: {
                value: 0.1500
            },
            u_Cutoff: {
                value: 0.5
            },
            u_MainTex: {
                value: "Icing-2f212815-f4d3-c1a4-681a-feeaf9c6dc37/Icing-2f212815-f4d3-c1a4-681a-feeaf9c6dc37-v10.0-BumpMap.png"
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_BumpMap: {
                value: "Icing-2f212815-f4d3-c1a4-681a-feeaf9c6dc37/Icing-2f212815-f4d3-c1a4-681a-feeaf9c6dc37-v10.0-BumpMap.png"
            },
            u_BumpMap_TexelSize: {
                value: new (0, $a0PbU$Vector4)(0.0010, 0.0078, 1024, 128)
            }
        },
        vertexShader: "Icing-2f212815-f4d3-c1a4-681a-feeaf9c6dc37/Icing-2f212815-f4d3-c1a4-681a-feeaf9c6dc37-v10.0-vertex.glsl",
        fragmentShader: "Icing-2f212815-f4d3-c1a4-681a-feeaf9c6dc37/Icing-2f212815-f4d3-c1a4-681a-feeaf9c6dc37-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Ink": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0.2352941, 0.2352941, 0.2352941)
            },
            u_Shininess: {
                value: 0.4
            },
            u_Cutoff: {
                value: 0.5
            },
            u_MainTex: {
                value: "Ink-c0012095-3ffd-4040-8ee1-fc180d346eaa/Ink-c0012095-3ffd-4040-8ee1-fc180d346eaa-v10.0-MainTex.png"
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_BumpMap: {
                value: "Ink-c0012095-3ffd-4040-8ee1-fc180d346eaa/Ink-c0012095-3ffd-4040-8ee1-fc180d346eaa-v10.0-BumpMap.png"
            },
            u_BumpMap_TexelSize: {
                value: new (0, $a0PbU$Vector4)(0.0010, 0.0078, 1024, 128)
            }
        },
        vertexShader: "Ink-f5c336cf-5108-4b40-ade9-c687504385ab/Ink-f5c336cf-5108-4b40-ade9-c687504385ab-v10.0-vertex.glsl",
        fragmentShader: "Ink-f5c336cf-5108-4b40-ade9-c687504385ab/Ink-f5c336cf-5108-4b40-ade9-c687504385ab-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Leaves": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0, 0, 0)
            },
            u_Shininess: {
                value: 0.395
            },
            u_Cutoff: {
                value: 0.5
            },
            u_MainTex: {
                value: "Leaves-ea19de07-d0c0-4484-9198-18489a3c1487/Leaves-ea19de07-d0c0-4484-9198-18489a3c1487-v10.0-MainTex.png"
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_BumpMap: {
                value: "Leaves-ea19de07-d0c0-4484-9198-18489a3c1487/Leaves-ea19de07-d0c0-4484-9198-18489a3c1487-v10.0-BumpMap.png"
            },
            u_BumpMap_TexelSize: {
                value: new (0, $a0PbU$Vector4)(0.0010, 0.0078, 1024, 128)
            }
        },
        vertexShader: "Leaves-ea19de07-d0c0-4484-9198-18489a3c1487/Leaves-ea19de07-d0c0-4484-9198-18489a3c1487-v10.0-vertex.glsl",
        fragmentShader: "Leaves-ea19de07-d0c0-4484-9198-18489a3c1487/Leaves-ea19de07-d0c0-4484-9198-18489a3c1487-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Light": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "Light-2241cd32-8ba2-48a5-9ee7-2caef7e9ed62/Light-2241cd32-8ba2-48a5-9ee7-2caef7e9ed62-v10.0-MainTex.png"
            },
            u_EmissionGain: {
                value: 0.45
            }
        },
        vertexShader: "Light-2241cd32-8ba2-48a5-9ee7-2caef7e9ed62/Light-2241cd32-8ba2-48a5-9ee7-2caef7e9ed62-v10.0-vertex.glsl",
        fragmentShader: "Light-2241cd32-8ba2-48a5-9ee7-2caef7e9ed62/Light-2241cd32-8ba2-48a5-9ee7-2caef7e9ed62-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 5,
        blendDstAlpha: 201,
        blendDst: 201,
        blendEquationAlpha: 100,
        blendEquation: 100,
        blendSrcAlpha: 201,
        blendSrc: 201
    },
    "LightWire": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_Shininess: {
                value: 0.81
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0.3455882, 0.3455882, 0.3455882)
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_MainTex: {
                value: "LightWire-4391aaaa-df81-4396-9e33-31e4e4930b27/LightWire-4391aaaa-df81-4396-9e33-31e4e4930b27-v10.0-MainTex.png"
            }
        },
        vertexShader: "LightWire-4391aaaa-df81-4396-9e33-31e4e4930b27/LightWire-4391aaaa-df81-4396-9e33-31e4e4930b27-v10.0-vertex.glsl",
        fragmentShader: "LightWire-4391aaaa-df81-4396-9e33-31e4e4930b27/LightWire-4391aaaa-df81-4396-9e33-31e4e4930b27-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Lofted": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Lofted-d381e0f5-3def-4a0d-8853-31e9200bcbda/Lofted-d381e0f5-3def-4a0d-8853-31e9200bcbda-v10.0-vertex.glsl",
        fragmentShader: "Lofted-d381e0f5-3def-4a0d-8853-31e9200bcbda/Lofted-d381e0f5-3def-4a0d-8853-31e9200bcbda-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Marker": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "Marker-429ed64a-4e97-4466-84d3-145a861ef684/Marker-429ed64a-4e97-4466-84d3-145a861ef684-v10.0-MainTex.png"
            },
            u_Cutoff: {
                value: 0.067
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Marker-429ed64a-4e97-4466-84d3-145a861ef684/Marker-429ed64a-4e97-4466-84d3-145a861ef684-v10.0-vertex.glsl",
        fragmentShader: "Marker-429ed64a-4e97-4466-84d3-145a861ef684/Marker-429ed64a-4e97-4466-84d3-145a861ef684-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "MatteHull": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "MatteHull-79348357-432d-4746-8e29-0e25c112e3aa/MatteHull-79348357-432d-4746-8e29-0e25c112e3aa-v10.0-vertex.glsl",
        fragmentShader: "MatteHull-79348357-432d-4746-8e29-0e25c112e3aa/MatteHull-79348357-432d-4746-8e29-0e25c112e3aa-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "NeonPulse": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_EmissionGain: {
                value: 0.5
            }
        },
        vertexShader: "NeonPulse-b2ffef01-eaaa-4ab5-aa64-95a2c4f5dbc6/NeonPulse-b2ffef01-eaaa-4ab5-aa64-95a2c4f5dbc6-v10.0-vertex.glsl",
        fragmentShader: "NeonPulse-b2ffef01-eaaa-4ab5-aa64-95a2c4f5dbc6/NeonPulse-b2ffef01-eaaa-4ab5-aa64-95a2c4f5dbc6-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 5,
        blendDstAlpha: 201,
        blendDst: 201,
        blendEquationAlpha: 100,
        blendEquation: 100,
        blendSrcAlpha: 201,
        blendSrc: 201
    },
    "OilPaint": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0.2352941, 0.2352941, 0.2352941)
            },
            u_Shininess: {
                value: 0.4
            },
            u_Cutoff: {
                value: 0.5
            },
            u_MainTex: {
                value: "OilPaint-f72ec0e7-a844-4e38-82e3-140c44772699/OilPaint-f72ec0e7-a844-4e38-82e3-140c44772699-v10.0-MainTex.png"
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_BumpMap: {
                value: "OilPaint-f72ec0e7-a844-4e38-82e3-140c44772699/OilPaint-f72ec0e7-a844-4e38-82e3-140c44772699-v10.0-BumpMap.png"
            },
            u_BumpMap_TexelSize: {
                value: new (0, $a0PbU$Vector4)(0.0020, 0.0020, 512, 512)
            }
        },
        vertexShader: "OilPaint-f72ec0e7-a844-4e38-82e3-140c44772699/OilPaint-f72ec0e7-a844-4e38-82e3-140c44772699-v10.0-vertex.glsl",
        fragmentShader: "OilPaint-f72ec0e7-a844-4e38-82e3-140c44772699/OilPaint-f72ec0e7-a844-4e38-82e3-140c44772699-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Paper": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0, 0, 0)
            },
            u_Shininess: {
                value: 0.145
            },
            u_Cutoff: {
                value: 0.16
            },
            u_MainTex: {
                value: "Paper-759f1ebd-20cd-4720-8d41-234e0da63716/Paper-759f1ebd-20cd-4720-8d41-234e0da63716-v10.0-MainTex.png"
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_BumpMap: {
                value: "Paper-759f1ebd-20cd-4720-8d41-234e0da63716/Paper-759f1ebd-20cd-4720-8d41-234e0da63716-v10.0-BumpMap.png"
            },
            u_BumpMap_TexelSize: {
                value: new (0, $a0PbU$Vector4)(0.0010, 0.0078, 1024, 128)
            }
        },
        vertexShader: "Paper-f1114e2e-eb8d-4fde-915a-6e653b54e9f5/Paper-f1114e2e-eb8d-4fde-915a-6e653b54e9f5-v10.0-vertex.glsl",
        fragmentShader: "Paper-f1114e2e-eb8d-4fde-915a-6e653b54e9f5/Paper-f1114e2e-eb8d-4fde-915a-6e653b54e9f5-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "PbrTemplate": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0, 0, 0)
            },
            u_Shininess: {
                value: 0.1500
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_Cutoff: {
                value: 0.2
            }
        },
        vertexShader: "PbrTemplate-f86a096c-2f4f-4f9d-ae19-81b99f2944e0/PbrTemplate-f86a096c-2f4f-4f9d-ae19-81b99f2944e0-v1.0-vertex.glsl",
        fragmentShader: "PbrTemplate-f86a096c-2f4f-4f9d-ae19-81b99f2944e0/PbrTemplate-f86a096c-2f4f-4f9d-ae19-81b99f2944e0-v1.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "PbrTransparentTemplate": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0, 0, 0)
            },
            u_Shininess: {
                value: 0.1500
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_Cutoff: {
                value: 0.2
            }
        },
        vertexShader: "PbrTransparentTemplate-19826f62-42ac-4a9e-8b77-4231fbd0cfbf/PbrTransparentTemplate-19826f62-42ac-4a9e-8b77-4231fbd0cfbf-v1.0-vertex.glsl",
        fragmentShader: "PbrTransparentTemplate-19826f62-42ac-4a9e-8b77-4231fbd0cfbf/PbrTransparentTemplate-19826f62-42ac-4a9e-8b77-4231fbd0cfbf-v1.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Petal": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0, 0, 0)
            },
            u_Shininess: {
                value: 0.01
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Petal-e0abbc80-0f80-e854-4970-8924a0863dcc/Petal-e0abbc80-0f80-e854-4970-8924a0863dcc-v10.0-vertex.glsl",
        fragmentShader: "Petal-e0abbc80-0f80-e854-4970-8924a0863dcc/Petal-e0abbc80-0f80-e854-4970-8924a0863dcc-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Plasma": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "Plasma-c33714d1-b2f9-412e-bd50-1884c9d46336/Plasma-c33714d1-b2f9-412e-bd50-1884c9d46336-v10.0-MainTex.png"
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            }
        },
        vertexShader: "Plasma-c33714d1-b2f9-412e-bd50-1884c9d46336/Plasma-c33714d1-b2f9-412e-bd50-1884c9d46336-v10.0-vertex.glsl",
        fragmentShader: "Plasma-c33714d1-b2f9-412e-bd50-1884c9d46336/Plasma-c33714d1-b2f9-412e-bd50-1884c9d46336-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Rainbow": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_EmissionGain: {
                value: 0.65
            }
        },
        vertexShader: "Rainbow-ad1ad437-76e2-450d-a23a-e17f8310b960/Rainbow-ad1ad437-76e2-450d-a23a-e17f8310b960-v10.0-vertex.glsl",
        fragmentShader: "Rainbow-ad1ad437-76e2-450d-a23a-e17f8310b960/Rainbow-ad1ad437-76e2-450d-a23a-e17f8310b960-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 5,
        blendDstAlpha: 201,
        blendDst: 201,
        blendEquationAlpha: 100,
        blendEquation: 100,
        blendSrcAlpha: 201,
        blendSrc: 201
    },
    "ShinyHull": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0.1985294, 0.1985294, 0.1985294)
            },
            u_Shininess: {
                value: 0.7430
            },
            u_Cutoff: {
                value: 0.5
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "ShinyHull-faaa4d44-fcfb-4177-96be-753ac0421ba3/ShinyHull-faaa4d44-fcfb-4177-96be-753ac0421ba3-v10.0-vertex.glsl",
        fragmentShader: "ShinyHull-faaa4d44-fcfb-4177-96be-753ac0421ba3/ShinyHull-faaa4d44-fcfb-4177-96be-753ac0421ba3-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Smoke": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_TintColor: {
                value: new (0, $a0PbU$Vector4)(1, 1, 1, 1)
            },
            u_MainTex: {
                value: "Smoke-70d79cca-b159-4f35-990c-f02193947fe8/Smoke-70d79cca-b159-4f35-990c-f02193947fe8-v10.0-MainTex.png"
            }
        },
        vertexShader: "Smoke-70d79cca-b159-4f35-990c-f02193947fe8/Smoke-70d79cca-b159-4f35-990c-f02193947fe8-v10.0-vertex.glsl",
        fragmentShader: "Smoke-70d79cca-b159-4f35-990c-f02193947fe8/Smoke-70d79cca-b159-4f35-990c-f02193947fe8-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "Snow": {
        uniforms: {
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_ScrollRate: {
                value: 0.2
            },
            u_ScrollDistance: {
                value: new (0, $a0PbU$Vector3)(0, -0.3, 0)
            },
            u_ScrollJitterIntensity: {
                value: 0.01
            },
            u_ScrollJitterFrequency: {
                value: 12
            },
            u_TintColor: {
                value: new (0, $a0PbU$Vector4)(1, 1, 1, 1)
            },
            u_MainTex: {
                value: "Snow-d902ed8b-d0d1-476c-a8de-878a79e3a34c/Snow-d902ed8b-d0d1-476c-a8de-878a79e3a34c-v10.0-MainTex.png"
            }
        },
        vertexShader: "Snow-d902ed8b-d0d1-476c-a8de-878a79e3a34c/Snow-d902ed8b-d0d1-476c-a8de-878a79e3a34c-v10.0-vertex.glsl",
        fragmentShader: "Snow-d902ed8b-d0d1-476c-a8de-878a79e3a34c/Snow-d902ed8b-d0d1-476c-a8de-878a79e3a34c-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "SoftHighlighter": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "SoftHighlighter-accb32f5-4509-454f-93f8-1df3fd31df1b/SoftHighlighter-accb32f5-4509-454f-93f8-1df3fd31df1b-v10.0-MainTex.png"
            }
        },
        vertexShader: "SoftHighlighter-accb32f5-4509-454f-93f8-1df3fd31df1b/SoftHighlighter-accb32f5-4509-454f-93f8-1df3fd31df1b-v10.0-vertex.glsl",
        fragmentShader: "SoftHighlighter-accb32f5-4509-454f-93f8-1df3fd31df1b/SoftHighlighter-accb32f5-4509-454f-93f8-1df3fd31df1b-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 5,
        blendDstAlpha: 201,
        blendDst: 201,
        blendEquationAlpha: 100,
        blendEquation: 100,
        blendSrcAlpha: 201,
        blendSrc: 201
    },
    "Spikes": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Spikes-cf7f0059-7aeb-53a4-2b67-c83d863a9ffa/Spikes-cf7f0059-7aeb-53a4-2b67-c83d863a9ffa-v10.0-vertex.glsl",
        fragmentShader: "Spikes-cf7f0059-7aeb-53a4-2b67-c83d863a9ffa/Spikes-cf7f0059-7aeb-53a4-2b67-c83d863a9ffa-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Splatter": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_MainTex: {
                value: "Splatter-7a1c8107-50c5-4b70-9a39-421576d6617e/Splatter-7a1c8107-50c5-4b70-9a39-421576d6617e-v10.0-MainTex.png"
            },
            u_Cutoff: {
                value: 0.2
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Splatter-7a1c8107-50c5-4b70-9a39-421576d6617e/Splatter-7a1c8107-50c5-4b70-9a39-421576d6617e-v10.0-vertex.glsl",
        fragmentShader: "Splatter-7a1c8107-50c5-4b70-9a39-421576d6617e/Splatter-7a1c8107-50c5-4b70-9a39-421576d6617e-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Stars": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_SparkleRate: {
                value: 5.3
            },
            u_MainTex: {
                value: "Stars-0eb4db27-3f82-408d-b5a1-19ebd7d5b711/Stars-0eb4db27-3f82-408d-b5a1-19ebd7d5b711-v10.0-MainTex.png"
            }
        },
        vertexShader: "Stars-0eb4db27-3f82-408d-b5a1-19ebd7d5b711/Stars-0eb4db27-3f82-408d-b5a1-19ebd7d5b711-v10.0-vertex.glsl",
        fragmentShader: "Stars-0eb4db27-3f82-408d-b5a1-19ebd7d5b711/Stars-0eb4db27-3f82-408d-b5a1-19ebd7d5b711-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "Streamers": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "Streamers-44bb800a-fbc3-4592-8426-94ecb05ddec3/Streamers-44bb800a-fbc3-4592-8426-94ecb05ddec3-v10.0-MainTex.png"
            },
            u_EmissionGain: {
                value: 0.4
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            }
        },
        vertexShader: "Streamers-44bb800a-fbc3-4592-8426-94ecb05ddec3/Streamers-44bb800a-fbc3-4592-8426-94ecb05ddec3-v10.0-vertex.glsl",
        fragmentShader: "Streamers-44bb800a-fbc3-4592-8426-94ecb05ddec3/Streamers-44bb800a-fbc3-4592-8426-94ecb05ddec3-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "Taffy": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "Taffy-0077f88c-d93a-42f3-b59b-b31c50cdb414/Taffy-0077f88c-d93a-42f3-b59b-b31c50cdb414-v10.0-MainTex.png"
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Taffy-0077f88c-d93a-42f3-b59b-b31c50cdb414/Taffy-0077f88c-d93a-42f3-b59b-b31c50cdb414-v10.0-vertex.glsl",
        fragmentShader: "Taffy-0077f88c-d93a-42f3-b59b-b31c50cdb414/Taffy-0077f88c-d93a-42f3-b59b-b31c50cdb414-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "TaperedFlat": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_MainTex: {
                value: "TaperedFlat-b468c1fb-f254-41ed-8ec9-57030bc5660c/TaperedFlat-b468c1fb-f254-41ed-8ec9-57030bc5660c-v10.0-MainTex.png"
            },
            u_Cutoff: {
                value: 0.067
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "TaperedFlat-b468c1fb-f254-41ed-8ec9-57030bc5660c/TaperedFlat-b468c1fb-f254-41ed-8ec9-57030bc5660c-v10.0-vertex.glsl",
        fragmentShader: "TaperedFlat-b468c1fb-f254-41ed-8ec9-57030bc5660c/TaperedFlat-b468c1fb-f254-41ed-8ec9-57030bc5660c-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "TaperedMarker": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "TaperedMarker-d90c6ad8-af0f-4b54-b422-e0f92abe1b3c/TaperedMarker-d90c6ad8-af0f-4b54-b422-e0f92abe1b3c-v10.0-MainTex.png"
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "TaperedMarker-d90c6ad8-af0f-4b54-b422-e0f92abe1b3c/TaperedMarker-d90c6ad8-af0f-4b54-b422-e0f92abe1b3c-v10.0-vertex.glsl",
        fragmentShader: "TaperedMarker-d90c6ad8-af0f-4b54-b422-e0f92abe1b3c/TaperedMarker-d90c6ad8-af0f-4b54-b422-e0f92abe1b3c-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "TaperedMarker_Flat": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0, 0, 0)
            },
            u_Shininess: {
                value: 0.1500
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_MainTex: {
                value: "TaperedMarker_Flat-1a26b8c0-8a07-4f8a-9fac-d2ef36e0cad0/TaperedMarker_Flat-1a26b8c0-8a07-4f8a-9fac-d2ef36e0cad0-v10.0-MainTex.png"
            },
            u_Cutoff: {
                value: 0.2
            }
        },
        vertexShader: "TaperedMarker_Flat-1a26b8c0-8a07-4f8a-9fac-d2ef36e0cad0/TaperedMarker_Flat-1a26b8c0-8a07-4f8a-9fac-d2ef36e0cad0-v10.0-vertex.glsl",
        fragmentShader: "TaperedMarker_Flat-1a26b8c0-8a07-4f8a-9fac-d2ef36e0cad0/TaperedMarker_Flat-1a26b8c0-8a07-4f8a-9fac-d2ef36e0cad0-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "ThickPaint": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0.2352941, 0.2352941, 0.2352941)
            },
            u_Shininess: {
                value: 0.4
            },
            u_Cutoff: {
                value: 0.5
            },
            u_MainTex: {
                value: "ThickPaint-75b32cf0-fdd6-4d89-a64b-e2a00b247b0f/ThickPaint-75b32cf0-fdd6-4d89-a64b-e2a00b247b0f-v10.0-MainTex.png"
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_BumpMap: {
                value: "ThickPaint-75b32cf0-fdd6-4d89-a64b-e2a00b247b0f/ThickPaint-75b32cf0-fdd6-4d89-a64b-e2a00b247b0f-v10.0-BumpMap.png"
            },
            u_BumpMap_TexelSize: {
                value: new (0, $a0PbU$Vector4)(0.0010, 0.0078, 1024, 128)
            }
        },
        vertexShader: "ThickPaint-75b32cf0-fdd6-4d89-a64b-e2a00b247b0f/ThickPaint-75b32cf0-fdd6-4d89-a64b-e2a00b247b0f-v10.0-vertex.glsl",
        fragmentShader: "ThickPaint-75b32cf0-fdd6-4d89-a64b-e2a00b247b0f/ThickPaint-75b32cf0-fdd6-4d89-a64b-e2a00b247b0f-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Toon": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Toon-4391385a-df73-4396-9e33-31e4e4930b27/Toon-4391385a-df73-4396-9e33-31e4e4930b27-v10.0-vertex.glsl",
        fragmentShader: "Toon-4391385a-df73-4396-9e33-31e4e4930b27/Toon-4391385a-df73-4396-9e33-31e4e4930b27-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "UnlitHull": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "UnlitHull-a8fea537-da7c-4d4b-817f-24f074725d6d/UnlitHull-a8fea537-da7c-4d4b-817f-24f074725d6d-v10.0-vertex.glsl",
        fragmentShader: "UnlitHull-a8fea537-da7c-4d4b-817f-24f074725d6d/UnlitHull-a8fea537-da7c-4d4b-817f-24f074725d6d-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "VelvetInk": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_MainTex: {
                value: "VelvetInk-d229d335-c334-495a-a801-660ac8a87360/VelvetInk-d229d335-c334-495a-a801-660ac8a87360-v10.0-MainTex.png"
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "VelvetInk-d229d335-c334-495a-a801-660ac8a87360/VelvetInk-d229d335-c334-495a-a801-660ac8a87360-v10.0-vertex.glsl",
        fragmentShader: "VelvetInk-d229d335-c334-495a-a801-660ac8a87360/VelvetInk-d229d335-c334-495a-a801-660ac8a87360-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "Waveform": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_EmissionGain: {
                value: 0.5178571
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_MainTex: {
                value: "Waveform-10201aa3-ebc2-42d8-84b7-2e63f6eeb8ab/Waveform-10201aa3-ebc2-42d8-84b7-2e63f6eeb8ab-v10.0-MainTex.png"
            }
        },
        vertexShader: "Waveform-10201aa3-ebc2-42d8-84b7-2e63f6eeb8ab/Waveform-10201aa3-ebc2-42d8-84b7-2e63f6eeb8ab-v10.0-vertex.glsl",
        fragmentShader: "Waveform-10201aa3-ebc2-42d8-84b7-2e63f6eeb8ab/Waveform-10201aa3-ebc2-42d8-84b7-2e63f6eeb8ab-v10.0-fragment.glsl",
        side: 2,
        transparent: true,
        depthFunc: 2,
        depthWrite: false,
        depthTest: true,
        blending: 2
    },
    "WetPaint": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_SpecColor: {
                value: new (0, $a0PbU$Vector3)(0.1397059, 0.1397059, 0.1397059)
            },
            u_Shininess: {
                value: 0.85
            },
            u_Cutoff: {
                value: 0.3
            },
            u_MainTex: {
                value: "WetPaint-b67c0e81-ce6d-40a8-aeb0-ef036b081aa3/WetPaint-b67c0e81-ce6d-40a8-aeb0-ef036b081aa3-v10.0-MainTex.png"
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            },
            u_BumpMap: {
                value: "WetPaint-b67c0e81-ce6d-40a8-aeb0-ef036b081aa3/WetPaint-b67c0e81-ce6d-40a8-aeb0-ef036b081aa3-v10.0-BumpMap.png"
            },
            u_BumpMap_TexelSize: {
                value: new (0, $a0PbU$Vector4)(0.0010, 0.0078, 1024, 128)
            }
        },
        vertexShader: "WetPaint-b67c0e81-ce6d-40a8-aeb0-ef036b081aa3/WetPaint-b67c0e81-ce6d-40a8-aeb0-ef036b081aa3-v10.0-vertex.glsl",
        fragmentShader: "WetPaint-b67c0e81-ce6d-40a8-aeb0-ef036b081aa3/WetPaint-b67c0e81-ce6d-40a8-aeb0-ef036b081aa3-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "WigglyGraphite": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_time: {
                value: new (0, $a0PbU$Vector4)()
            },
            u_ambient_light_color: {
                value: new (0, $a0PbU$Vector4)(0.3922, 0.3922, 0.3922, 1)
            },
            u_SceneLight_0_color: {
                value: new (0, $a0PbU$Vector4)(0.7780, 0.8157, 0.9914, 1)
            },
            u_SceneLight_1_color: {
                value: new (0, $a0PbU$Vector4)(0.4282, 0.4212, 0.3459, 1)
            },
            u_Cutoff: {
                value: 0.5
            },
            u_MainTex: {
                value: "WigglyGraphite-5347acf0-a8e2-47b6-8346-30c70719d763/WigglyGraphite-5347acf0-a8e2-47b6-8346-30c70719d763-v10.0-MainTex.png"
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "WigglyGraphite-5347acf0-a8e2-47b6-8346-30c70719d763/WigglyGraphite-5347acf0-a8e2-47b6-8346-30c70719d763-v10.0-vertex.glsl",
        fragmentShader: "WigglyGraphite-5347acf0-a8e2-47b6-8346-30c70719d763/WigglyGraphite-5347acf0-a8e2-47b6-8346-30c70719d763-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "Wire": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Wire-4391385a-cf83-4396-9e33-31e4e4930b27/Wire-4391385a-cf83-4396-9e33-31e4e4930b27-v10.0-vertex.glsl",
        fragmentShader: "Wire-4391385a-cf83-4396-9e33-31e4e4930b27/Wire-4391385a-cf83-4396-9e33-31e4e4930b27-v10.0-fragment.glsl",
        side: 2,
        transparent: false,
        depthFunc: 2,
        depthWrite: true,
        depthTest: true,
        blending: 0
    },
    "SvgTemplate": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "SvgTemplate-cf3401b3-4ada-4877-995a-1aa64e7b604a/SvgTemplate-cf3401b3-4ada-4877-995a-1aa64e7b604a-v10.0-vertex.glsl",
        fragmentShader: "SvgTemplate-cf3401b3-4ada-4877-995a-1aa64e7b604a/SvgTemplate-cf3401b3-4ada-4877-995a-1aa64e7b604a-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Gouache": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Gouache-4465b5ef-3605-bec4-2b3e-6b04508ddb6b/Gouache-4465b5ef-3605-bec4-2b3e-6b04508ddb6b-v10.0-vertex.glsl",
        fragmentShader: "Gouache-4465b5ef-3605-bec4-2b3e-6b04508ddb6b/Gouache-4465b5ef-3605-bec4-2b3e-6b04508ddb6b-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "MylarTube": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "MylarTube-8e58ceea-7830-49b4-aba9-6215104ab52a/MylarTube-8e58ceea-7830-49b4-aba9-6215104ab52a-v10.0-vertex.glsl",
        fragmentShader: "MylarTube-8e58ceea-7830-49b4-aba9-6215104ab52a/MylarTube-8e58ceea-7830-49b4-aba9-6215104ab52a-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Rain": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Rain-03a529e1-f519-3dd4-582d-2d5cd92c3f4f/Rain-03a529e1-f519-3dd4-582d-2d5cd92c3f4f-v10.0-vertex.glsl",
        fragmentShader: "Rain-03a529e1-f519-3dd4-582d-2d5cd92c3f4f/Rain-03a529e1-f519-3dd4-582d-2d5cd92c3f4f-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "DryBrush": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "DryBrush-725f4c6a-6427-6524-29ab-da371924adab/DryBrush-725f4c6a-6427-6524-29ab-da371924adab-v10.0-vertex.glsl",
        fragmentShader: "DryBrush-725f4c6a-6427-6524-29ab-da371924adab/DryBrush-725f4c6a-6427-6524-29ab-da371924adab-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "LeakyPen": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "LeakyPen-ddda8745-4bb5-ac54-88b6-d1480370583e/LeakyPen-ddda8745-4bb5-ac54-88b6-d1480370583e-v10.0-vertex.glsl",
        fragmentShader: "LeakyPen-ddda8745-4bb5-ac54-88b6-d1480370583e/LeakyPen-ddda8745-4bb5-ac54-88b6-d1480370583e-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Sparks": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Sparks-50e99447-3861-05f4-697d-a1b96e771b98/Sparks-50e99447-3861-05f4-697d-a1b96e771b98-v10.0-vertex.glsl",
        fragmentShader: "Sparks-50e99447-3861-05f4-697d-a1b96e771b98/Sparks-50e99447-3861-05f4-697d-a1b96e771b98-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Wind": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Wind-7136a729-1aab-bd24-f8b2-ca88b6adfb67/Wind-7136a729-1aab-bd24-f8b2-ca88b6adfb67-v10.0-vertex.glsl",
        fragmentShader: "Wind-7136a729-1aab-bd24-f8b2-ca88b6adfb67/Wind-7136a729-1aab-bd24-f8b2-ca88b6adfb67-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Rising Bubbles": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Rising%20Bubbles-a8147ce1-005e-abe4-88e8-09a1eaadcc89/Rising%20Bubbles-a8147ce1-005e-abe4-88e8-09a1eaadcc89-v10.0-vertex.glsl",
        fragmentShader: "Rising%20Bubbles-a8147ce1-005e-abe4-88e8-09a1eaadcc89/Rising%20Bubbles-a8147ce1-005e-abe4-88e8-09a1eaadcc89-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "TaperedWire": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "TaperedWire-9568870f-8594-60f4-1b20-dfbc8a5eac0e/TaperedWire-9568870f-8594-60f4-1b20-dfbc8a5eac0e-v10.0-vertex.glsl",
        fragmentShader: "TaperedWire-9568870f-8594-60f4-1b20-dfbc8a5eac0e/TaperedWire-9568870f-8594-60f4-1b20-dfbc8a5eac0e-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "SquarePaper": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "SquarePaper-2e03b1bf-3ebd-4609-9d7e-f4cafadc4dfa/SquarePaper-2e03b1bf-3ebd-4609-9d7e-f4cafadc4dfa-v10.0-vertex.glsl",
        fragmentShader: "SquarePaper-2e03b1bf-3ebd-4609-9d7e-f4cafadc4dfa/SquarePaper-2e03b1bf-3ebd-4609-9d7e-f4cafadc4dfa-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "ThickGeometry": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "ThickGeometry-39ee7377-7a9e-47a7-a0f8-0c77712f75d3/ThickGeometry-39ee7377-7a9e-47a7-a0f8-0c77712f75d3-v10.0-vertex.glsl",
        fragmentShader: "ThickGeometry-39ee7377-7a9e-47a7-a0f8-0c77712f75d3/ThickGeometry-39ee7377-7a9e-47a7-a0f8-0c77712f75d3-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Wireframe": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Wireframe-2c1a6a63-6552-4d23-86d7-58f6fba8581b/Wireframe-2c1a6a63-6552-4d23-86d7-58f6fba8581b-v10.0-vertex.glsl",
        fragmentShader: "Wireframe-2c1a6a63-6552-4d23-86d7-58f6fba8581b/Wireframe-2c1a6a63-6552-4d23-86d7-58f6fba8581b-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "CandyCane": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "CandyCane-61d2ef63-ed60-49b3-85fb-7267b7d234f2/CandyCane-61d2ef63-ed60-49b3-85fb-7267b7d234f2-v10.0-vertex.glsl",
        fragmentShader: "CandyCane-61d2ef63-ed60-49b3-85fb-7267b7d234f2/CandyCane-61d2ef63-ed60-49b3-85fb-7267b7d234f2-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "HolidayTree": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "HolidayTree-20a0bf1a-a96e-44e5-84ac-9823d2d65023/HolidayTree-20a0bf1a-a96e-44e5-84ac-9823d2d65023-v10.0-vertex.glsl",
        fragmentShader: "HolidayTree-20a0bf1a-a96e-44e5-84ac-9823d2d65023/HolidayTree-20a0bf1a-a96e-44e5-84ac-9823d2d65023-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Snowflake": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Snowflake-2b65cd94-9259-4f10-99d2-d54b6664ac33/Snowflake-2b65cd94-9259-4f10-99d2-d54b6664ac33-v10.0-vertex.glsl",
        fragmentShader: "Snowflake-2b65cd94-9259-4f10-99d2-d54b6664ac33/Snowflake-2b65cd94-9259-4f10-99d2-d54b6664ac33-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Braid3": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Braid3-22d4f434-23e4-49d9-a9bd-05798aa21e58/Braid3-22d4f434-23e4-49d9-a9bd-05798aa21e58-v10.0-vertex.glsl",
        fragmentShader: "Braid3-22d4f434-23e4-49d9-a9bd-05798aa21e58/Braid3-22d4f434-23e4-49d9-a9bd-05798aa21e58-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Muscle": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Muscle-f28c395c-a57d-464b-8f0b-558c59478fa3/Muscle-f28c395c-a57d-464b-8f0b-558c59478fa3-v10.0-vertex.glsl",
        fragmentShader: "Muscle-f28c395c-a57d-464b-8f0b-558c59478fa3/Muscle-f28c395c-a57d-464b-8f0b-558c59478fa3-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Guts": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Guts-99aafe96-1645-44cd-99bd-979bc6ef37c5/Guts-99aafe96-1645-44cd-99bd-979bc6ef37c5-v10.0-vertex.glsl",
        fragmentShader: "Guts-99aafe96-1645-44cd-99bd-979bc6ef37c5/Guts-99aafe96-1645-44cd-99bd-979bc6ef37c5-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Fire2": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Fire2-53d753ef-083c-45e1-98e7-4459b4471219/Fire2-53d753ef-083c-45e1-98e7-4459b4471219-v10.0-vertex.glsl",
        fragmentShader: "Fire2-53d753ef-083c-45e1-98e7-4459b4471219/Fire2-53d753ef-083c-45e1-98e7-4459b4471219-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "TubeToonInverted": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "TubeToonInverted-9871385a-df73-4396-9e33-31e4e4930b27/TubeToonInverted-9871385a-df73-4396-9e33-31e4e4930b27-v10.0-vertex.glsl",
        fragmentShader: "TubeToonInverted-9871385a-df73-4396-9e33-31e4e4930b27/TubeToonInverted-9871385a-df73-4396-9e33-31e4e4930b27-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "FacetedTube": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "FacetedTube-4391ffaa-df73-4396-9e33-31e4e4930b27/FacetedTube-4391ffaa-df73-4396-9e33-31e4e4930b27-v10.0-vertex.glsl",
        fragmentShader: "FacetedTube-4391ffaa-df73-4396-9e33-31e4e4930b27/FacetedTube-4391ffaa-df73-4396-9e33-31e4e4930b27-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "WaveformParticles": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "WaveformParticles-6a1cf9f9-032c-45ec-9b6e-a6680bee30f7/WaveformParticles-6a1cf9f9-032c-45ec-9b6e-a6680bee30f7-v10.0-vertex.glsl",
        fragmentShader: "WaveformParticles-6a1cf9f9-032c-45ec-9b6e-a6680bee30f7/WaveformParticles-6a1cf9f9-032c-45ec-9b6e-a6680bee30f7-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "BubbleWand": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "BubbleWand-eba3f993-f9a1-4d35-b84e-bb08f48981a4/BubbleWand-eba3f993-f9a1-4d35-b84e-bb08f48981a4-v10.0-vertex.glsl",
        fragmentShader: "BubbleWand-eba3f993-f9a1-4d35-b84e-bb08f48981a4/BubbleWand-eba3f993-f9a1-4d35-b84e-bb08f48981a4-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "DanceFloor": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "DanceFloor-6a1cf9f9-032c-45ec-311e-a6680bee32e9/DanceFloor-6a1cf9f9-032c-45ec-311e-a6680bee32e9-v10.0-vertex.glsl",
        fragmentShader: "DanceFloor-6a1cf9f9-032c-45ec-311e-a6680bee32e9/DanceFloor-6a1cf9f9-032c-45ec-311e-a6680bee32e9-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "WaveformTube": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "WaveformTube-0f5820df-cb6b-4a6c-960e-56e4c8000eda/WaveformTube-0f5820df-cb6b-4a6c-960e-56e4c8000eda-v10.0-vertex.glsl",
        fragmentShader: "WaveformTube-0f5820df-cb6b-4a6c-960e-56e4c8000eda/WaveformTube-0f5820df-cb6b-4a6c-960e-56e4c8000eda-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Drafting": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Drafting-492b36ff-b337-436a-ba5f-1e87ee86747e/Drafting-492b36ff-b337-436a-ba5f-1e87ee86747e-v10.0-vertex.glsl",
        fragmentShader: "Drafting-492b36ff-b337-436a-ba5f-1e87ee86747e/Drafting-492b36ff-b337-436a-ba5f-1e87ee86747e-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "SingleSided": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "SingleSided-f0a2298a-be80-432c-9fee-a86dcc06f4f9/SingleSided-f0a2298a-be80-432c-9fee-a86dcc06f4f9-v10.0-vertex.glsl",
        fragmentShader: "SingleSided-f0a2298a-be80-432c-9fee-a86dcc06f4f9/SingleSided-f0a2298a-be80-432c-9fee-a86dcc06f4f9-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "DoubleFlat": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "DoubleFlat-f4a0550c-332a-4e1a-9793-b71508f4a454/DoubleFlat-f4a0550c-332a-4e1a-9793-b71508f4a454-v10.0-vertex.glsl",
        fragmentShader: "DoubleFlat-f4a0550c-332a-4e1a-9793-b71508f4a454/DoubleFlat-f4a0550c-332a-4e1a-9793-b71508f4a454-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "TubeAdditive": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "TubeAdditive-c1c9b26d-673a-4dc6-b373-51715654ab96/TubeAdditive-c1c9b26d-673a-4dc6-b373-51715654ab96-v10.0-vertex.glsl",
        fragmentShader: "TubeAdditive-c1c9b26d-673a-4dc6-b373-51715654ab96/TubeAdditive-c1c9b26d-673a-4dc6-b373-51715654ab96-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Feather": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Feather-a555b809-2017-46cb-ac26-e63173d8f45e/Feather-a555b809-2017-46cb-ac26-e63173d8f45e-v10.0-vertex.glsl",
        fragmentShader: "Feather-a555b809-2017-46cb-ac26-e63173d8f45e/Feather-a555b809-2017-46cb-ac26-e63173d8f45e-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "DuctTapeGeometry": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "DuctTapeGeometry-84d5bbb2-6634-8434-f8a7-681b576b4664/DuctTapeGeometry-84d5bbb2-6634-8434-f8a7-681b576b4664-v10.0-vertex.glsl",
        fragmentShader: "DuctTapeGeometry-84d5bbb2-6634-8434-f8a7-681b576b4664/DuctTapeGeometry-84d5bbb2-6634-8434-f8a7-681b576b4664-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "TaperedHueShift": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "TaperedHueShift-3d9755da-56c7-7294-9b1d-5ec349975f52/TaperedHueShift-3d9755da-56c7-7294-9b1d-5ec349975f52-v10.0-vertex.glsl",
        fragmentShader: "TaperedHueShift-3d9755da-56c7-7294-9b1d-5ec349975f52/TaperedHueShift-3d9755da-56c7-7294-9b1d-5ec349975f52-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Lacewing": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Lacewing-1cf94f63-f57a-4a1a-ad14-295af4f5ab5c/Lacewing-1cf94f63-f57a-4a1a-ad14-295af4f5ab5c-v10.0-vertex.glsl",
        fragmentShader: "Lacewing-1cf94f63-f57a-4a1a-ad14-295af4f5ab5c/Lacewing-1cf94f63-f57a-4a1a-ad14-295af4f5ab5c-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Marbled Rainbow": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Marbled Rainbow-c86c058d-1bda-2e94-08db-f3d6a96ac4a1/Marbled Rainbow-c86c058d-1bda-2e94-08db-f3d6a96ac4a1-v10.0-vertex.glsl",
        fragmentShader: "Marbled Rainbow-c86c058d-1bda-2e94-08db-f3d6a96ac4a1/Marbled Rainbow-c86c058d-1bda-2e94-08db-f3d6a96ac4a1-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Charcoal": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Charcoal-fde6e778-0f7a-e584-38d6-89d44cee59f6/Charcoal-fde6e778-0f7a-e584-38d6-89d44cee59f6-v10.0-vertex.glsl",
        fragmentShader: "Charcoal-fde6e778-0f7a-e584-38d6-89d44cee59f6/Charcoal-fde6e778-0f7a-e584-38d6-89d44cee59f6-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "KeijiroTube": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "KeijiroTube-f8ba3d18-01fc-4d7b-b2d9-b99d10b8e7cf/KeijiroTube-f8ba3d18-01fc-4d7b-b2d9-b99d10b8e7cf-v10.0-vertex.glsl",
        fragmentShader: "KeijiroTube-f8ba3d18-01fc-4d7b-b2d9-b99d10b8e7cf/KeijiroTube-f8ba3d18-01fc-4d7b-b2d9-b99d10b8e7cf-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Lofted (Hue Shift)": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Lofted (Hue Shift)-c5da2e70-a6e4-63a4-898c-5cfedef09c97/Lofted (Hue Shift)-c5da2e70-a6e4-63a4-898c-5cfedef09c97-v10.0-vertex.glsl",
        fragmentShader: "Lofted (Hue Shift)-c5da2e70-a6e4-63a4-898c-5cfedef09c97/Lofted (Hue Shift)-c5da2e70-a6e4-63a4-898c-5cfedef09c97-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Wire (Lit)": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Wire (Lit)-62fef968-e842-3224-4a0e-1fdb7cfb745c/Wire (Lit)-62fef968-e842-3224-4a0e-1fdb7cfb745c-v10.0-vertex.glsl",
        fragmentShader: "Wire (Lit)-62fef968-e842-3224-4a0e-1fdb7cfb745c/Wire (Lit)-62fef968-e842-3224-4a0e-1fdb7cfb745c-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "WaveformFFT": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "WaveformFFT-d120944d-772f-4062-99c6-46a6f219eeaf/WaveformFFT-d120944d-772f-4062-99c6-46a6f219eeaf-v10.0-vertex.glsl",
        fragmentShader: "WaveformFFT-d120944d-772f-4062-99c6-46a6f219eeaf/WaveformFFT-d120944d-772f-4062-99c6-46a6f219eeaf-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Fairy": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Fairy-d9cc5e99-ace1-4d12-96e0-4a7c18c99cfc/Fairy-d9cc5e99-ace1-4d12-96e0-4a7c18c99cfc-v10.0-vertex.glsl",
        fragmentShader: "Fairy-d9cc5e99-ace1-4d12-96e0-4a7c18c99cfc/Fairy-d9cc5e99-ace1-4d12-96e0-4a7c18c99cfc-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Space": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Space-bdf65db2-1fb7-4202-b5e0-c6b5e3ea851e/Space-bdf65db2-1fb7-4202-b5e0-c6b5e3ea851e-v10.0-vertex.glsl",
        fragmentShader: "Space-bdf65db2-1fb7-4202-b5e0-c6b5e3ea851e/Space-bdf65db2-1fb7-4202-b5e0-c6b5e3ea851e-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Digital": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Digital-30cb9af6-be41-4872-8f3e-cbff63fe3db8/Digital-30cb9af6-be41-4872-8f3e-cbff63fe3db8-v10.0-vertex.glsl",
        fragmentShader: "Digital-30cb9af6-be41-4872-8f3e-cbff63fe3db8/Digital-30cb9af6-be41-4872-8f3e-cbff63fe3db8-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Race": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Race-abfbb2aa-70b4-4a5c-8126-8eedda2b3628/Race-abfbb2aa-70b4-4a5c-8126-8eedda2b3628-v10.0-vertex.glsl",
        fragmentShader: "Race-abfbb2aa-70b4-4a5c-8126-8eedda2b3628/Race-abfbb2aa-70b4-4a5c-8126-8eedda2b3628-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "SmoothHull": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "SmoothHull-355b3579-bf1d-4ff5-a200-704437fe684b/SmoothHull-355b3579-bf1d-4ff5-a200-704437fe684b-v10.0-vertex.glsl",
        fragmentShader: "SmoothHull-355b3579-bf1d-4ff5-a200-704437fe684b/SmoothHull-355b3579-bf1d-4ff5-a200-704437fe684b-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "Leaves2": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "Leaves2-7259cce5-41c1-ec74-c885-78af28a31d95/Leaves2-7259cce5-41c1-ec74-c885-78af28a31d95-v10.0-vertex.glsl",
        fragmentShader: "Leaves2-7259cce5-41c1-ec74-c885-78af28a31d95/Leaves2-7259cce5-41c1-ec74-c885-78af28a31d95-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "InkGeometry": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "InkGeometry-7c972c27-d3c2-8af4-7bf8-5d9db8f0b7bb/InkGeometry-7c972c27-d3c2-8af4-7bf8-5d9db8f0b7bb-v10.0-vertex.glsl",
        fragmentShader: "InkGeometry-7c972c27-d3c2-8af4-7bf8-5d9db8f0b7bb/InkGeometry-7c972c27-d3c2-8af4-7bf8-5d9db8f0b7bb-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "ConcaveHull": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "ConcaveHull-7ae1f880-a517-44a0-99f9-1cab654498c6/ConcaveHull-7ae1f880-a517-44a0-99f9-1cab654498c6-v10.0-vertex.glsl",
        fragmentShader: "ConcaveHull-7ae1f880-a517-44a0-99f9-1cab654498c6/ConcaveHull-7ae1f880-a517-44a0-99f9-1cab654498c6-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "3D Printing Brush": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "3D Printing Brush-d3f3b18a-da03-f694-b838-28ba8e749a98/3D Printing Brush-d3f3b18a-da03-f694-b838-28ba8e749a98-v10.0-vertex.glsl",
        fragmentShader: "3D Printing Brush-d3f3b18a-da03-f694-b838-28ba8e749a98/3D Printing Brush-d3f3b18a-da03-f694-b838-28ba8e749a98-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    },
    "PassthroughHull": {
        uniforms: {
            u_SceneLight_0_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_SceneLight_1_matrix: {
                value: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            },
            u_fogColor: {
                value: new (0, $a0PbU$Vector3)(0.0196, 0.0196, 0.0196)
            },
            u_fogDensity: {
                value: 0
            }
        },
        vertexShader: "PassthroughHull-cc131ff8-0d17-4677-93e0-d7cd19fea9ac/PassthroughHull-cc131ff8-0d17-4677-93e0-d7cd19fea9ac-v10.0-vertex.glsl",
        fragmentShader: "PassthroughHull-cc131ff8-0d17-4677-93e0-d7cd19fea9ac/PassthroughHull-cc131ff8-0d17-4677-93e0-d7cd19fea9ac-v10.0-fragment.glsl",
        side: 1,
        transparent: null,
        depthFunc: 1,
        depthWrite: null,
        depthTest: null,
        blending: 1
    }
};


class $ca086492148dd3fa$export$2b011a5b12963d65 {
    constructor(parser, brushPath){
        this.name = "GOOGLE_tilt_brush_material";
        this.altName = "GOOGLE_tilt_brush_techniques";
        this.parser = parser;
        this.brushPath = brushPath;
        if (this.brushPath.slice(this.brushPath.length - 1) !== "/") this.brushPath += "/";
        this.tiltShaderLoader = new (0, $cf098bb13503440d$export$bcc22bf437a07d8f)(parser.options.manager);
        this.tiltShaderLoader.setPath(brushPath);
        this.clock = new (0, $a0PbU$Clock)();
    }
    beforeRoot() {
        const parser = this.parser;
        const json = parser.json;
        let isTilt = this.isTiltGltf(json);
        if (!isTilt) console.warn("Not TiltGltf Error", json);
        json.materials.forEach((material)=>{
            const extensionsDef = material.extensions;
            let nameOrGuid;
            if (extensionsDef?.[this.name]) nameOrGuid = extensionsDef[this.name].guid;
            else if (material.name.startsWith("material_")) nameOrGuid = material.name.replace("material_", "");
            else if (material.name.startsWith("ob-")) nameOrGuid = material.name.replace("ob-", "");
            else {
                let newName = this.tryReplaceBlocksName(material.name);
                if (newName !== undefined) nameOrGuid = newName;
            }
            const materialName = this.tiltShaderLoader.lookupMaterialName(nameOrGuid);
            const materialParams = this.tiltShaderLoader.lookupMaterialParams(materialName);
            if (!materialParams) {
                console.warn(`No material params found: ${nameOrGuid} (${materialName})`);
                return;
            }
            if (material?.pbrMetallicRoughness?.baseColorTexture && materialParams.uniforms?.u_MainTex) {
                const mainTex = json.images[material.pbrMetallicRoughness.baseColorTexture.index];
                mainTex.uri = this.brushPath + materialParams.uniforms?.u_MainTex.value;
            }
            if (material?.normalTexture && materialParams.uniforms?.u_BumpMap) {
                const bumpMap = json.images[material.normalTexture.index];
                bumpMap.uri = this.brushPath + materialParams.uniforms.u_BumpMap.value;
            }
        });
    }
    afterRoot(glTF) {
        const parser = this.parser;
        const json = parser.json;
        const shaderResolves = [];
        for (const scene of glTF.scenes)scene.traverse(async (object)=>{
            const association = parser.associations.get(object);
            if (association === undefined || association.meshes === undefined) return;
            const mesh = json.meshes[association.meshes];
            mesh.primitives.forEach((prim)=>{
                if (prim.material === null || prim.material === undefined) return;
                const material = json.materials[prim.material];
                const extensionsDef = material.extensions;
                let brushName;
                if (material.name.startsWith("ob-")) // New glb naming convention
                brushName = material.name.replace("ob-", "");
                else if (material.name.startsWith("material_")) // Some legacy poly files
                brushName = material.name.replace("material_", "");
                else if (extensionsDef) {
                    let exDef = extensionsDef[this.name];
                    if (exDef !== undefined) brushName = exDef.guid;
                }
                let newName = this.tryReplaceBlocksName(material.name);
                if (newName !== undefined) brushName = newName;
                if (brushName !== undefined) shaderResolves.push(this.replaceMaterial(object, brushName));
                else console.warn("No brush name found for material", material.name, brushName);
            });
        });
        return Promise.all(shaderResolves);
    }
    tryReplaceBlocksName(originalName) {
        let newName;
        if (originalName.includes("_BlocksPaper ")) newName = "BlocksPaper";
        else if (originalName.includes("_BlocksGlass ")) newName = "BlocksGlass";
        else if (originalName.includes("_BlocksGem ")) newName = "BlocksGem";
        return newName;
    }
    isTiltGltf(json) {
        let isTiltGltf = false;
        isTiltGltf ||= json.extensionsUsed && json.extensionsUsed.includes(this.name);
        isTiltGltf ||= json.extensionsUsed && json.extensionsUsed.includes(this.altName);
        isTiltGltf ||= "extensions" in json && this.name in json["extensions"];
        isTiltGltf ||= "extensions" in json && this.altName in json["extensions"];
        return isTiltGltf;
    }
    async replaceMaterial(mesh, guidOrName) {
        let renameAttribute = (mesh, oldName, newName)=>{
            if (mesh.geometry.getAttribute(oldName)) mesh.geometry.setAttribute(newName, mesh.geometry.getAttribute(oldName));
            delete mesh.oldName;
        };
        let copyFixColorAttribute = (mesh)=>{
            function linearToSRGB(x) {
                return x <= 0.0031308 ? x * 12.92 : 1.055 * Math.pow(x, 1.0 / 2.4) - 0.055;
            }
            let colorAttribute = mesh.geometry.getAttribute("color");
            if (colorAttribute && colorAttribute.array instanceof Float32Array) {
                const src = colorAttribute.array;
                const itemSize = colorAttribute.itemSize;
                const count = src.length / itemSize;
                const normalizedColors = new Uint8Array(src.length);
                for(let i = 0; i < count; ++i){
                    normalizedColors[i * itemSize + 0] = Math.round(linearToSRGB(src[i * itemSize + 0]) * 255); // R
                    normalizedColors[i * itemSize + 1] = Math.round(linearToSRGB(src[i * itemSize + 1]) * 255); // G
                    normalizedColors[i * itemSize + 2] = Math.round(linearToSRGB(src[i * itemSize + 2]) * 255); // B
                    if (itemSize > 3) normalizedColors[i * itemSize + 3] = Math.round(src[i * itemSize + 3] * 255); // A (linear)
                }
                colorAttribute = new THREE.BufferAttribute(normalizedColors, itemSize, true);
                mesh.geometry.setAttribute("a_color", colorAttribute);
            } else mesh.geometry.setAttribute("a_color", mesh.geometry.getAttribute("color"));
        };
        let shader;
        switch(guidOrName){
            case "0e87b49c-6546-3a34-3a44-8a556d7d6c3e":
            case "BlocksBasic":
            case "BlocksPaper":
                mesh.geometry.name = "geometry_BlocksBasic";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("BlocksBasic");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_BlocksBasic";
                break;
            case "232998f8-d357-47a2-993a-53415df9be10":
            case "BlocksGem":
                mesh.geometry.name = "geometry_BlocksGem";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("BlocksGem");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_BlocksGem";
                break;
            case "3d813d82-5839-4450-8ddc-8e889ecd96c7":
            case "BlocksGlass":
                mesh.geometry.name = "geometry_BlocksGlass";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("BlocksGlass");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_BlocksGlass";
                break;
            case "89d104cd-d012-426b-b5b3-bbaee63ac43c":
            case "Bubbles":
                mesh.geometry.name = "geometry_Bubbles";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                renameAttribute(mesh, "_tb_unity_normal", "a_normal");
                renameAttribute(mesh, "normal", "a_normal");
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                renameAttribute(mesh, "_tb_unity_texcoord_1", "a_texcoord1");
                renameAttribute(mesh, "texcoord_1", "a_texcoord1");
                shader = await this.tiltShaderLoader.loadAsync("Bubbles");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Bubbles";
                break;
            case "700f3aa8-9a7c-2384-8b8a-ea028905dd8c":
            case "CelVinyl":
                mesh.geometry.name = "geometry_CelVinyl";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("CelVinyl");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_CelVinyl";
                break;
            case "0f0ff7b2-a677-45eb-a7d6-0cd7206f4816":
            case "ChromaticWave":
                mesh.geometry.name = "geometry_ChromaticWave";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("ChromaticWave");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_ChromaticWave";
                break;
            case "1161af82-50cf-47db-9706-0c3576d43c43":
            case "79168f10-6961-464a-8be1-57ed364c5600":
            case "CoarseBristles":
                mesh.geometry.name = "geometry_CoarseBristles";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("CoarseBristles");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_CoarseBristles";
                break;
            case "1caa6d7d-f015-3f54-3a4b-8b5354d39f81":
            case "Comet":
                mesh.geometry.name = "geometry_Comet";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Comet");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Comet";
                break;
            case "c8313697-2563-47fc-832e-290f4c04b901":
            case "DiamondHull":
                mesh.geometry.name = "geometry_DiamondHull";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("DiamondHull");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_DiamondHull";
                break;
            case "4391aaaa-df73-4396-9e33-31e4e4930b27":
            case "Disco":
                mesh.geometry.name = "geometry_Disco";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Disco");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Disco";
                break;
            case "d1d991f2-e7a0-4cf1-b328-f57e915e6260":
            case "DotMarker":
                mesh.geometry.name = "geometry_DotMarker";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("DotMarker");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_DotMarker";
                break;
            case "6a1cf9f9-032c-45ec-9b1d-a6680bee30f7":
            case "Dots":
                mesh.geometry.name = "geometry_Dots";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                renameAttribute(mesh, "_tb_unity_normal", "a_normal");
                renameAttribute(mesh, "normal", "a_normal");
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                renameAttribute(mesh, "_tb_unity_texcoord_1", "a_texcoord1");
                renameAttribute(mesh, "texcoord_1", "a_texcoord1");
                shader = await this.tiltShaderLoader.loadAsync("Dots");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Dots";
                break;
            case "0d3889f3-3ede-470c-8af4-f44813306126":
            case "DoubleTaperedFlat":
                mesh.geometry.name = "geometry_DoubleTaperedFlat";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("DoubleTaperedFlat");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_DoubleTaperedFlat";
                break;
            case "0d3889f3-3ede-470c-8af4-de4813306126":
            case "DoubleTaperedMarker":
                mesh.geometry.name = "geometry_DoubleTaperedMarker";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("DoubleTaperedMarker");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_DoubleTaperedMarker";
                break;
            case "d0262945-853c-4481-9cbd-88586bed93cb":
            case "3ca16e2f-bdcd-4da2-8631-dcef342f40f1":
            case "DuctTape":
                mesh.geometry.name = "geometry_DuctTape";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("DuctTape");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_DuctTape";
                break;
            case "f6e85de3-6dcc-4e7f-87fd-cee8c3d25d51":
            case "Electricity":
                mesh.geometry.name = "geometry_Electricity";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                renameAttribute(mesh, "_tb_unity_texcoord_1", "a_texcoord1");
                renameAttribute(mesh, "texcoord_1", "a_texcoord1");
                shader = await this.tiltShaderLoader.loadAsync("Electricity");
                mesh.material = shader;
                mesh.material.name = "material_Electricity";
                break;
            case "02ffb866-7fb2-4d15-b761-1012cefb1360":
            case "Embers":
                mesh.geometry.name = "geometry_Embers";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                renameAttribute(mesh, "_tb_unity_normal", "a_normal");
                renameAttribute(mesh, "normal", "a_normal");
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                renameAttribute(mesh, "_tb_unity_texcoord_1", "a_texcoord1");
                renameAttribute(mesh, "texcoord_1", "a_texcoord1");
                shader = await this.tiltShaderLoader.loadAsync("Embers");
                mesh.material = shader;
                mesh.material.name = "material_Embers";
                break;
            case "0ad58bbd-42bc-484e-ad9a-b61036ff4ce7":
            case "EnvironmentDiffuse":
                mesh.geometry.name = "geometry_EnvironmentDiffuse";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("EnvironmentDiffuse");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_EnvironmentDiffuse";
                break;
            case "d01d9d6c-9a61-4aba-8146-5891fafb013b":
            case "EnvironmentDiffuseLightMap":
                mesh.geometry.name = "geometry_EnvironmentDiffuseLightMap";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("EnvironmentDiffuseLightMap");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_EnvironmentDiffuseLightMap";
                break;
            case "cb92b597-94ca-4255-b017-0e3f42f12f9e":
            case "Fire":
                mesh.geometry.name = "geometry_Fire";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Fire");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Fire";
                break;
            case "2d35bcf0-e4d8-452c-97b1-3311be063130":
            case "280c0a7a-aad8-416c-a7d2-df63d129ca70":
            case "55303bc4-c749-4a72-98d9-d23e68e76e18":
            case "Flat":
                mesh.geometry.name = "geometry_Flat";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Flat");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Flat";
                break;
            case "cf019139-d41c-4eb0-a1d0-5cf54b0a42f3":
            case "Highlighter":
                mesh.geometry.name = "geometry_Highlighter";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Highlighter");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Highlighter";
                break;
            case "dce872c2-7b49-4684-b59b-c45387949c5c":
            case "e8ef32b1-baa8-460a-9c2c-9cf8506794f5":
            case "Hypercolor":
                mesh.geometry.name = "geometry_Hypercolor";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Hypercolor");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Hypercolor";
                break;
            case "6a1cf9f9-032c-45ec-9b6e-a6680bee32e9":
            case "HyperGrid":
                mesh.geometry.name = "geometry_HyperGrid";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                renameAttribute(mesh, "_tb_unity_texcoord_1", "a_texcoord1");
                renameAttribute(mesh, "texcoord_1", "a_texcoord1");
                shader = await this.tiltShaderLoader.loadAsync("HyperGrid");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_HyperGrid";
                break;
            case "2f212815-f4d3-c1a4-681a-feeaf9c6dc37":
            case "Icing":
                mesh.geometry.name = "geometry_Icing";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Icing");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Icing";
                break;
            case "f5c336cf-5108-4b40-ade9-c687504385ab":
            case "c0012095-3ffd-4040-8ee1-fc180d346eaa":
            case "Ink":
                mesh.geometry.name = "geometry_Ink";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Ink");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Ink";
                break;
            case "4a76a27a-44d8-4bfe-9a8c-713749a499b0":
            case "ea19de07-d0c0-4484-9198-18489a3c1487":
            case "Leaves":
                mesh.geometry.name = "geometry_Leaves";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Leaves");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Leaves";
                break;
            case "2241cd32-8ba2-48a5-9ee7-2caef7e9ed62":
            case "Light":
                mesh.geometry.name = "geometry_Light";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Light");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                console.log(`Setting ${mesh.material.name}`);
                mesh.material.name = "material_Light";
                console.log(`Set material for mesh ${mesh.name} to ${mesh.material.name}`);
                break;
            case "4391aaaa-df81-4396-9e33-31e4e4930b27":
            case "LightWire":
                mesh.geometry.name = "geometry_LightWire";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("LightWire");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_LightWire";
                break;
            case "d381e0f5-3def-4a0d-8853-31e9200bcbda":
            case "Lofted":
                mesh.geometry.name = "geometry_Lofted";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Lofted");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Lofted";
                break;
            case "429ed64a-4e97-4466-84d3-145a861ef684":
            case "Marker":
                mesh.geometry.name = "geometry_Marker";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Marker");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Marker";
                break;
            case "79348357-432d-4746-8e29-0e25c112e3aa":
            case "MatteHull":
                mesh.geometry.name = "geometry_MatteHull";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("MatteHull");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_MatteHull";
                break;
            case "b2ffef01-eaaa-4ab5-aa64-95a2c4f5dbc6":
            case "NeonPulse":
                mesh.geometry.name = "geometry_NeonPulse";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("NeonPulse");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_NeonPulse";
                break;
            case "f72ec0e7-a844-4e38-82e3-140c44772699":
            case "c515dad7-4393-4681-81ad-162ef052241b":
            case "OilPaint":
                mesh.geometry.name = "geometry_OilPaint";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("OilPaint");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_OilPaint";
                break;
            case "f1114e2e-eb8d-4fde-915a-6e653b54e9f5":
            case "759f1ebd-20cd-4720-8d41-234e0da63716":
            case "Paper":
                mesh.geometry.name = "geometry_Paper";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Paper");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Paper";
                break;
            case "f86a096c-2f4f-4f9d-ae19-81b99f2944e0":
            case "PbrTemplate":
                mesh.geometry.name = "geometry_PbrTemplate";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("PbrTemplate");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_PbrTemplate";
                break;
            case "19826f62-42ac-4a9e-8b77-4231fbd0cfbf":
            case "PbrTransparentTemplate":
                mesh.geometry.name = "geometry_PbrTransparentTemplate";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("PbrTransparentTemplate");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_PbrTransparentTemplate";
                break;
            case "e0abbc80-0f80-e854-4970-8924a0863dcc":
            case "Petal":
                mesh.geometry.name = "geometry_Petal";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Petal");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Petal";
                break;
            case "c33714d1-b2f9-412e-bd50-1884c9d46336":
            case "Plasma":
                mesh.geometry.name = "geometry_Plasma";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Plasma");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Plasma";
                break;
            case "ad1ad437-76e2-450d-a23a-e17f8310b960":
            case "Rainbow":
                mesh.geometry.name = "geometry_Rainbow";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Rainbow");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Rainbow";
                break;
            case "faaa4d44-fcfb-4177-96be-753ac0421ba3":
            case "ShinyHull":
                mesh.geometry.name = "geometry_ShinyHull";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("ShinyHull");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_ShinyHull";
                break;
            case "70d79cca-b159-4f35-990c-f02193947fe8":
            case "Smoke":
                mesh.geometry.name = "geometry_Smoke";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                renameAttribute(mesh, "_tb_unity_normal", "a_normal");
                renameAttribute(mesh, "normal", "a_normal");
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                renameAttribute(mesh, "_tb_unity_texcoord_1", "a_texcoord1");
                renameAttribute(mesh, "texcoord_1", "a_texcoord1");
                shader = await this.tiltShaderLoader.loadAsync("Smoke");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Smoke";
                break;
            case "d902ed8b-d0d1-476c-a8de-878a79e3a34c":
            case "Snow":
                mesh.geometry.name = "geometry_Snow";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                renameAttribute(mesh, "_tb_unity_normal", "a_normal");
                renameAttribute(mesh, "normal", "a_normal");
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                renameAttribute(mesh, "_tb_unity_texcoord_1", "a_texcoord1");
                renameAttribute(mesh, "texcoord_1", "a_texcoord1");
                shader = await this.tiltShaderLoader.loadAsync("Snow");
                mesh.material = shader;
                mesh.material.name = "material_Snow";
                break;
            case "accb32f5-4509-454f-93f8-1df3fd31df1b":
            case "SoftHighlighter":
                mesh.geometry.name = "geometry_SoftHighlighter";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("SoftHighlighter");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_SoftHighlighter";
                break;
            case "cf7f0059-7aeb-53a4-2b67-c83d863a9ffa":
            case "Spikes":
                mesh.geometry.name = "geometry_Spikes";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Spikes");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Spikes";
                break;
            case "8dc4a70c-d558-4efd-a5ed-d4e860f40dc3":
            case "7a1c8107-50c5-4b70-9a39-421576d6617e":
            case "Splatter":
                mesh.geometry.name = "geometry_Splatter";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Splatter");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Splatter";
                break;
            case "0eb4db27-3f82-408d-b5a1-19ebd7d5b711":
            case "Stars":
                mesh.geometry.name = "geometry_Stars";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                renameAttribute(mesh, "_tb_unity_normal", "a_normal");
                renameAttribute(mesh, "normal", "a_normal");
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                renameAttribute(mesh, "_tb_unity_texcoord_1", "a_texcoord1");
                renameAttribute(mesh, "texcoord_1", "a_texcoord1");
                shader = await this.tiltShaderLoader.loadAsync("Stars");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Stars";
                break;
            case "44bb800a-fbc3-4592-8426-94ecb05ddec3":
            case "Streamers":
                mesh.geometry.name = "geometry_Streamers";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Streamers");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Streamers";
                break;
            case "0077f88c-d93a-42f3-b59b-b31c50cdb414":
            case "Taffy":
                mesh.geometry.name = "geometry_Taffy";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Taffy");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Taffy";
                break;
            case "b468c1fb-f254-41ed-8ec9-57030bc5660c":
            case "c8ccb53d-ae13-45ef-8afb-b730d81394eb":
            case "TaperedFlat":
                mesh.geometry.name = "geometry_TaperedFlat";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("TaperedFlat");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_TaperedFlat";
                break;
            case "d90c6ad8-af0f-4b54-b422-e0f92abe1b3c":
            case "1a26b8c0-8a07-4f8a-9fac-d2ef36e0cad0":
            case "TaperedMarker":
                mesh.geometry.name = "geometry_TaperedMarker";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("TaperedMarker");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_TaperedMarker";
                break;
            case "75b32cf0-fdd6-4d89-a64b-e2a00b247b0f":
            case "fdf0326a-c0d1-4fed-b101-9db0ff6d071f":
            case "ThickPaint":
                mesh.geometry.name = "geometry_ThickPaint";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("ThickPaint");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_ThickPaint";
                break;
            case "4391385a-df73-4396-9e33-31e4e4930b27":
            case "Toon":
                mesh.geometry.name = "geometry_Toon";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Toon");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Toon";
                break;
            case "a8fea537-da7c-4d4b-817f-24f074725d6d":
            case "UnlitHull":
                mesh.geometry.name = "geometry_UnlitHull";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("UnlitHull");
                shader.fog = true;
                mesh.material = shader;
                mesh.material.name = "material_UnlitHull";
                break;
            case "d229d335-c334-495a-a801-660ac8a87360":
            case "VelvetInk":
                mesh.geometry.name = "geometry_VelvetInk";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("VelvetInk");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_VelvetInk";
                break;
            case "10201aa3-ebc2-42d8-84b7-2e63f6eeb8ab":
            case "Waveform":
                mesh.geometry.name = "geometry_Waveform";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("Waveform");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_Waveform";
                break;
            case "b67c0e81-ce6d-40a8-aeb0-ef036b081aa3":
            case "dea67637-cd1a-27e4-c9b1-52f4bbcb84e5":
            case "WetPaint":
                mesh.geometry.name = "geometry_WetPaint";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("WetPaint");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_WetPaint";
                break;
            case "5347acf0-a8e2-47b6-8346-30c70719d763":
            case "e814fef1-97fd-7194-4a2f-50c2bb918be2":
            case "WigglyGraphite":
                mesh.geometry.name = "geometry_WigglyGraphite";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                renameAttribute(mesh, "_tb_unity_texcoord_0", "a_texcoord0");
                renameAttribute(mesh, "texcoord_0", "a_texcoord0");
                mesh.geometry.setAttribute("a_texcoord0", mesh.geometry.getAttribute("uv"));
                shader = await this.tiltShaderLoader.loadAsync("WigglyGraphite");
                shader.lights = true;
                shader.fog = true;
                shader.uniformsNeedUpdate = true;
                mesh.material = shader;
                mesh.material.name = "material_WigglyGraphite";
                break;
            case "4391385a-cf83-4396-9e33-31e4e4930b27":
            case "Wire":
                mesh.geometry.name = "geometry_Wire";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Wire");
                mesh.material = shader;
                mesh.material.name = "material_Wire";
                break;
            case "cf3401b3-4ada-4877-995a-1aa64e7b604a":
            case "SvgTemplate":
                mesh.geometry.name = "geometry_SvgTemplate";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("SvgTemplate");
                mesh.material = shader;
                mesh.material.name = "material_SvgTemplate";
                break;
            case "4465b5ef-3605-bec4-2b3e-6b04508ddb6b":
            case "Gouache":
                mesh.geometry.name = "geometry_Gouache";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Gouache");
                mesh.material = shader;
                mesh.material.name = "material_Gouache";
                break;
            case "8e58ceea-7830-49b4-aba9-6215104ab52a":
            case "MylarTube":
                mesh.geometry.name = "geometry_MylarTube";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("MylarTube");
                mesh.material = shader;
                mesh.material.name = "material_MylarTube";
                break;
            case "03a529e1-f519-3dd4-582d-2d5cd92c3f4f":
            case "Rain":
                mesh.geometry.name = "geometry_Rain";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Rain");
                mesh.material = shader;
                mesh.material.name = "material_Rain";
                break;
            case "725f4c6a-6427-6524-29ab-da371924adab":
            case "DryBrush":
                mesh.geometry.name = "geometry_DryBrush";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("DryBrush");
                mesh.material = shader;
                mesh.material.name = "material_DryBrush";
                break;
            case "ddda8745-4bb5-ac54-88b6-d1480370583e":
            case "LeakyPen":
                mesh.geometry.name = "geometry_LeakyPen";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("LeakyPen");
                mesh.material = shader;
                mesh.material.name = "material_LeakyPen";
                break;
            case "50e99447-3861-05f4-697d-a1b96e771b98":
            case "Sparks":
                mesh.geometry.name = "geometry_Sparks";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Sparks");
                mesh.material = shader;
                mesh.material.name = "material_Sparks";
                break;
            case "7136a729-1aab-bd24-f8b2-ca88b6adfb67":
            case "Wind":
                mesh.geometry.name = "geometry_Wind";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Wind");
                mesh.material = shader;
                mesh.material.name = "material_Wind";
                break;
            case "a8147ce1-005e-abe4-88e8-09a1eaadcc89":
            case "Rising Bubbles":
                mesh.geometry.name = "geometry_Rising Bubbles";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Rising Bubbles");
                mesh.material = shader;
                mesh.material.name = "material_Rising Bubbles";
                break;
            case "9568870f-8594-60f4-1b20-dfbc8a5eac0e":
            case "TaperedWire":
                mesh.geometry.name = "geometry_TaperedWire";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("TaperedWire");
                mesh.material = shader;
                mesh.material.name = "material_TaperedWire";
                break;
            case "2e03b1bf-3ebd-4609-9d7e-f4cafadc4dfa":
            case "SquarePaper":
                mesh.geometry.name = "geometry_SquarePaper";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("SquarePaper");
                mesh.material = shader;
                mesh.material.name = "material_SquarePaper";
                break;
            case "39ee7377-7a9e-47a7-a0f8-0c77712f75d3":
            case "ThickGeometry":
                mesh.geometry.name = "geometry_ThickGeometry";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("ThickGeometry");
                mesh.material = shader;
                mesh.material.name = "material_ThickGeometry";
                break;
            case "2c1a6a63-6552-4d23-86d7-58f6fba8581b":
            case "Wireframe":
                mesh.geometry.name = "geometry_Wireframe";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Wireframe");
                mesh.material = shader;
                mesh.material.name = "material_Wireframe";
                break;
            case "61d2ef63-ed60-49b3-85fb-7267b7d234f2":
            case "CandyCane":
                mesh.geometry.name = "geometry_CandyCane";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("CandyCane");
                mesh.material = shader;
                mesh.material.name = "material_CandyCane";
                break;
            case "20a0bf1a-a96e-44e5-84ac-9823d2d65023":
            case "HolidayTree":
                mesh.geometry.name = "geometry_HolidayTree";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("HolidayTree");
                mesh.material = shader;
                mesh.material.name = "material_HolidayTree";
                break;
            case "2b65cd94-9259-4f10-99d2-d54b6664ac33":
            case "Snowflake":
                mesh.geometry.name = "geometry_Snowflake";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Snowflake");
                mesh.material = shader;
                mesh.material.name = "material_Snowflake";
                break;
            case "22d4f434-23e4-49d9-a9bd-05798aa21e58":
            case "Braid3":
                mesh.geometry.name = "geometry_Braid3";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Braid3");
                mesh.material = shader;
                mesh.material.name = "material_Braid3";
                break;
            case "f28c395c-a57d-464b-8f0b-558c59478fa3":
            case "Muscle":
                mesh.geometry.name = "geometry_Muscle";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Muscle");
                mesh.material = shader;
                mesh.material.name = "material_Muscle";
                break;
            case "99aafe96-1645-44cd-99bd-979bc6ef37c5":
            case "Guts":
                mesh.geometry.name = "geometry_Guts";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Guts");
                mesh.material = shader;
                mesh.material.name = "material_Guts";
                break;
            case "53d753ef-083c-45e1-98e7-4459b4471219":
            case "Fire2":
                mesh.geometry.name = "geometry_Fire2";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Fire2");
                mesh.material = shader;
                mesh.material.name = "material_Fire2";
                break;
            case "9871385a-df73-4396-9e33-31e4e4930b27":
            case "TubeToonInverted":
                mesh.geometry.name = "geometry_TubeToonInverted";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("TubeToonInverted");
                mesh.material = shader;
                mesh.material.name = "material_TubeToonInverted";
                break;
            case "4391ffaa-df73-4396-9e33-31e4e4930b27":
            case "FacetedTube":
                mesh.geometry.name = "geometry_FacetedTube";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("FacetedTube");
                mesh.material = shader;
                mesh.material.name = "material_FacetedTube";
                break;
            case "6a1cf9f9-032c-45ec-9b6e-a6680bee30f7":
            case "WaveformParticles":
                mesh.geometry.name = "geometry_WaveformParticles";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("WaveformParticles");
                mesh.material = shader;
                mesh.material.name = "material_WaveformParticles";
                break;
            case "eba3f993-f9a1-4d35-b84e-bb08f48981a4":
            case "BubbleWand":
                mesh.geometry.name = "geometry_BubbleWand";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("BubbleWand");
                mesh.material = shader;
                mesh.material.name = "material_BubbleWand";
                break;
            case "6a1cf9f9-032c-45ec-311e-a6680bee32e9":
            case "DanceFloor":
                mesh.geometry.name = "geometry_DanceFloor";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("DanceFloor");
                mesh.material = shader;
                mesh.material.name = "material_DanceFloor";
                break;
            case "0f5820df-cb6b-4a6c-960e-56e4c8000eda":
            case "WaveformTube":
                mesh.geometry.name = "geometry_WaveformTube";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("WaveformTube");
                mesh.material = shader;
                mesh.material.name = "material_WaveformTube";
                break;
            case "492b36ff-b337-436a-ba5f-1e87ee86747e":
            case "Drafting":
                mesh.geometry.name = "geometry_Drafting";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Drafting");
                mesh.material = shader;
                mesh.material.name = "material_Drafting";
                break;
            case "f0a2298a-be80-432c-9fee-a86dcc06f4f9":
            case "SingleSided":
                mesh.geometry.name = "geometry_SingleSided";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("SingleSided");
                mesh.material = shader;
                mesh.material.name = "material_SingleSided";
                break;
            case "f4a0550c-332a-4e1a-9793-b71508f4a454":
            case "DoubleFlat":
                mesh.geometry.name = "geometry_DoubleFlat";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("DoubleFlat");
                mesh.material = shader;
                mesh.material.name = "material_DoubleFlat";
                break;
            case "c1c9b26d-673a-4dc6-b373-51715654ab96":
            case "TubeAdditive":
                mesh.geometry.name = "geometry_TubeAdditive";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("TubeAdditive");
                mesh.material = shader;
                mesh.material.name = "material_TubeAdditive";
                break;
            case "a555b809-2017-46cb-ac26-e63173d8f45e":
            case "Feather":
                mesh.geometry.name = "geometry_Feather";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Feather");
                mesh.material = shader;
                mesh.material.name = "material_Feather";
                break;
            case "84d5bbb2-6634-8434-f8a7-681b576b4664":
            case "DuctTapeGeometry":
                mesh.geometry.name = "geometry_DuctTapeGeometry";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("DuctTapeGeometry");
                mesh.material = shader;
                mesh.material.name = "material_DuctTapeGeometry";
                break;
            case "3d9755da-56c7-7294-9b1d-5ec349975f52":
            case "TaperedHueShift":
                mesh.geometry.name = "geometry_TaperedHueShift";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("TaperedHueShift");
                mesh.material = shader;
                mesh.material.name = "material_TaperedHueShift";
                break;
            case "1cf94f63-f57a-4a1a-ad14-295af4f5ab5c":
            case "Lacewing":
                mesh.geometry.name = "geometry_Lacewing";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Lacewing");
                mesh.material = shader;
                mesh.material.name = "material_Lacewing";
                break;
            case "c86c058d-1bda-2e94-08db-f3d6a96ac4a1":
            case "Marbled Rainbow":
                mesh.geometry.name = "geometry_Marbled Rainbow";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Marbled Rainbow");
                mesh.material = shader;
                mesh.material.name = "material_Marbled Rainbow";
                break;
            case "fde6e778-0f7a-e584-38d6-89d44cee59f6":
            case "Charcoal":
                mesh.geometry.name = "geometry_Charcoal";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Charcoal");
                mesh.material = shader;
                mesh.material.name = "material_Charcoal";
                break;
            case "f8ba3d18-01fc-4d7b-b2d9-b99d10b8e7cf":
            case "KeijiroTube":
                mesh.geometry.name = "geometry_KeijiroTube";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("KeijiroTube");
                mesh.material = shader;
                mesh.material.name = "material_KeijiroTube";
                break;
            case "c5da2e70-a6e4-63a4-898c-5cfedef09c97":
            case "Lofted (Hue Shift)":
                mesh.geometry.name = "geometry_Lofted (Hue Shift)";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Lofted (Hue Shift)");
                mesh.material = shader;
                mesh.material.name = "material_Lofted (Hue Shift)";
                break;
            case "62fef968-e842-3224-4a0e-1fdb7cfb745c":
            case "Wire (Lit)":
                mesh.geometry.name = "geometry_Wire (Lit)";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Wire (Lit)");
                mesh.material = shader;
                mesh.material.name = "material_Wire (Lit)";
                break;
            case "d120944d-772f-4062-99c6-46a6f219eeaf":
            case "WaveformFFT":
                mesh.geometry.name = "geometry_WaveformFFT";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("WaveformFFT");
                mesh.material = shader;
                mesh.material.name = "material_WaveformFFT";
                break;
            case "d9cc5e99-ace1-4d12-96e0-4a7c18c99cfc":
            case "Fairy":
                mesh.geometry.name = "geometry_Fairy";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Fairy");
                mesh.material = shader;
                mesh.material.name = "material_Fairy";
                break;
            case "bdf65db2-1fb7-4202-b5e0-c6b5e3ea851e":
            case "Space":
                mesh.geometry.name = "geometry_Space";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Space");
                mesh.material = shader;
                mesh.material.name = "material_Space";
                break;
            case "30cb9af6-be41-4872-8f3e-cbff63fe3db8":
            case "Digital":
                mesh.geometry.name = "geometry_Digital";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Digital");
                mesh.material = shader;
                mesh.material.name = "material_Digital";
                break;
            case "abfbb2aa-70b4-4a5c-8126-8eedda2b3628":
            case "Race":
                mesh.geometry.name = "geometry_Race";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Race");
                mesh.material = shader;
                mesh.material.name = "material_Race";
                break;
            case "355b3579-bf1d-4ff5-a200-704437fe684b":
            case "SmoothHull":
                mesh.geometry.name = "geometry_SmoothHull";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("SmoothHull");
                mesh.material = shader;
                mesh.material.name = "material_SmoothHull";
                break;
            case "7259cce5-41c1-ec74-c885-78af28a31d95":
            case "Leaves2":
                mesh.geometry.name = "geometry_Leaves2";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("Leaves2");
                mesh.material = shader;
                mesh.material.name = "material_Leaves2";
                break;
            case "7c972c27-d3c2-8af4-7bf8-5d9db8f0b7bb":
            case "InkGeometry":
                mesh.geometry.name = "geometry_InkGeometry";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("InkGeometry");
                mesh.material = shader;
                mesh.material.name = "material_InkGeometry";
                break;
            case "7ae1f880-a517-44a0-99f9-1cab654498c6":
            case "ConcaveHull":
                mesh.geometry.name = "geometry_ConcaveHull";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("ConcaveHull");
                mesh.material = shader;
                mesh.material.name = "material_ConcaveHull";
                break;
            case "d3f3b18a-da03-f694-b838-28ba8e749a98":
            case "3D Printing Brush":
                mesh.geometry.name = "geometry_3D Printing Brush";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("3D Printing Brush");
                mesh.material = shader;
                mesh.material.name = "material_3D Printing Brush";
                break;
            case "cc131ff8-0d17-4677-93e0-d7cd19fea9ac":
            case "PassthroughHull":
                mesh.geometry.name = "geometry_PassthroughHull";
                mesh.geometry.setAttribute("a_position", mesh.geometry.getAttribute("position"));
                mesh.geometry.setAttribute("a_normal", mesh.geometry.getAttribute("normal"));
                copyFixColorAttribute(mesh);
                shader = await this.tiltShaderLoader.loadAsync("PassthroughHull");
                mesh.material = shader;
                mesh.material.name = "material_PassthroughHull";
                break;
            default:
                console.warn(`Could not find brush with guid ${guidOrName}!`);
        }
        mesh.onBeforeRender = (renderer, scene, camera, geometry, material, group)=>{
            if (material?.uniforms?.u_time) {
                const elapsedTime = this.clock.getElapsedTime();
                const time = new (0, $a0PbU$Vector4)(elapsedTime / 20, elapsedTime, elapsedTime * 2, elapsedTime * 3);
                material.uniforms["u_time"].value = time;
            }
            if (material?.uniforms?.cameraPosition) material.uniforms["cameraPosition"].value = camera.position;
            if (material?.uniforms?.directionalLights?.value) {
                if (material.uniforms.directionalLights.value[0]) // Color
                {
                    if (material.uniforms.u_SceneLight_0_color) {
                        const color = material.uniforms.directionalLights.value[0].color;
                        material.uniforms.u_SceneLight_0_color.value = new (0, $a0PbU$Vector4)(color.r, color.g, color.b, 1);
                    }
                }
                if (material.uniforms.directionalLights.value[1]) // Color
                {
                    if (material.uniforms.u_SceneLight_1_color) {
                        const color = material.uniforms.directionalLights.value[1].color;
                        material.uniforms.u_SceneLight_1_color.value = new (0, $a0PbU$Vector4)(color.r, color.g, color.b, 1);
                    }
                }
            }
            if (material?.uniforms?.ambientLightColor?.value) {
                if (material.uniforms.u_ambient_light_color) {
                    const colorArray = material.uniforms.ambientLightColor.value;
                    material.uniforms.u_ambient_light_color.value = new (0, $a0PbU$Vector4)(colorArray[0], colorArray[1], colorArray[2], 1);
                }
            }
            if (material?.uniforms?.fogColor?.value) {
                if (material.uniforms.u_fogColor) {
                    const colorArray = material.uniforms.fogColor.value;
                    material.uniforms.u_fogColor.value = colorArray;
                }
            }
            if (material?.uniforms?.fogDensity?.value) {
                if (material.uniforms.u_fogDensity) material.uniforms.u_fogDensity.value = material.uniforms.fogDensity.value;
            }
        };
    }
}


class $d838b23e95c97ee8$export$24723e25468f5bb7 {
    constructor(parser, brushPath){
        this.name = "GOOGLE_tilt_brush_techniques";
        this.parser = parser;
        this.brushPath = brushPath;
        this.materialDefs = {
            "f72ec0e7-a844-4e38-82e3-140c44772699": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.5,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0,
                    "roughnessFactor": 0.600000024
                },
                "normalTexture": {
                    "texCoord": 0
                },
                "name": "brush_OilPaint",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "f72ec0e7-a844-4e38-82e3-140c44772699"
                    }
                }
            },
            "f5c336cf-5108-4b40-ade9-c687504385ab": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.5,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0,
                    "roughnessFactor": 0.600000024
                },
                "normalTexture": {
                    "texCoord": 0
                },
                "name": "brush_Ink",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "f5c336cf-5108-4b40-ade9-c687504385ab"
                    }
                }
            },
            "75b32cf0-fdd6-4d89-a64b-e2a00b247b0f": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.5,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0,
                    "roughnessFactor": 0.600000024
                },
                "normalTexture": {
                    "texCoord": 0
                },
                "name": "brush_ThickPaint",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "75b32cf0-fdd6-4d89-a64b-e2a00b247b0f"
                    }
                }
            },
            "b67c0e81-ce6d-40a8-aeb0-ef036b081aa3": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.300000012,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0,
                    "roughnessFactor": 0.149999976
                },
                "normalTexture": {
                    "texCoord": 0
                },
                "name": "brush_WetPaint",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "b67c0e81-ce6d-40a8-aeb0-ef036b081aa3"
                    }
                }
            },
            "429ed64a-4e97-4466-84d3-145a861ef684": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.0670000017,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Marker",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "429ed64a-4e97-4466-84d3-145a861ef684"
                    }
                }
            },
            "d90c6ad8-af0f-4b54-b422-e0f92abe1b3c": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.0670000017,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_TaperedMarker",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "d90c6ad8-af0f-4b54-b422-e0f92abe1b3c"
                    }
                }
            },
            "0d3889f3-3ede-470c-8af4-de4813306126": {
                "alphaMode": "OPAQUE",
                "doubleSided": true,
                "name": "brush_DoubleTaperedMarker",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "0d3889f3-3ede-470c-8af4-de4813306126"
                    }
                }
            },
            "cf019139-d41c-4eb0-a1d0-5cf54b0a42f3": {
                "alphaMode": "BLEND",
                "alphaCutoff": 0.119999997,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Highlighter",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "cf019139-d41c-4eb0-a1d0-5cf54b0a42f3"
                    }
                }
            },
            "2d35bcf0-e4d8-452c-97b1-3311be063130": {
                "alphaMode": "OPAQUE",
                "doubleSided": true,
                "name": "brush_Flat",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "2d35bcf0-e4d8-452c-97b1-3311be063130"
                    }
                }
            },
            "b468c1fb-f254-41ed-8ec9-57030bc5660c": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.0670000017,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_TaperedFlat",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "b468c1fb-f254-41ed-8ec9-57030bc5660c"
                    }
                }
            },
            "0d3889f3-3ede-470c-8af4-f44813306126": {
                "alphaMode": "OPAQUE",
                "doubleSided": true,
                "name": "brush_DoubleTaperedFlat",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "0d3889f3-3ede-470c-8af4-f44813306126"
                    }
                }
            },
            "accb32f5-4509-454f-93f8-1df3fd31df1b": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_SoftHighlighter",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "accb32f5-4509-454f-93f8-1df3fd31df1b"
                    }
                }
            },
            "2241cd32-8ba2-48a5-9ee7-2caef7e9ed62": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Light",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "2241cd32-8ba2-48a5-9ee7-2caef7e9ed62"
                    }
                }
            },
            "cb92b597-94ca-4255-b017-0e3f42f12f9e": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Fire",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "cb92b597-94ca-4255-b017-0e3f42f12f9e"
                    }
                }
            },
            "02ffb866-7fb2-4d15-b761-1012cefb1360": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Embers",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "02ffb866-7fb2-4d15-b761-1012cefb1360"
                    }
                }
            },
            "70d79cca-b159-4f35-990c-f02193947fe8": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Smoke",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "70d79cca-b159-4f35-990c-f02193947fe8"
                    }
                }
            },
            "ad1ad437-76e2-450d-a23a-e17f8310b960": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "name": "brush_Rainbow",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "ad1ad437-76e2-450d-a23a-e17f8310b960"
                    }
                }
            },
            "0eb4db27-3f82-408d-b5a1-19ebd7d5b711": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Stars",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "0eb4db27-3f82-408d-b5a1-19ebd7d5b711"
                    }
                }
            },
            "d229d335-c334-495a-a801-660ac8a87360": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_VelvetInk",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "d229d335-c334-495a-a801-660ac8a87360"
                    }
                }
            },
            "10201aa3-ebc2-42d8-84b7-2e63f6eeb8ab": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Waveform",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "10201aa3-ebc2-42d8-84b7-2e63f6eeb8ab"
                    }
                }
            },
            "8dc4a70c-d558-4efd-a5ed-d4e860f40dc3": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.200000003,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Splatter",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "8dc4a70c-d558-4efd-a5ed-d4e860f40dc3"
                    }
                }
            },
            "d0262945-853c-4481-9cbd-88586bed93cb": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.200000003,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0,
                    "roughnessFactor": 0.585999966
                },
                "normalTexture": {
                    "texCoord": 0
                },
                "name": "brush_DuctTape",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "d0262945-853c-4481-9cbd-88586bed93cb"
                    }
                }
            },
            "f1114e2e-eb8d-4fde-915a-6e653b54e9f5": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.159999996,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0,
                    "roughnessFactor": 0.855000019
                },
                "normalTexture": {
                    "texCoord": 0
                },
                "name": "brush_Paper",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "f1114e2e-eb8d-4fde-915a-6e653b54e9f5"
                    }
                }
            },
            "d902ed8b-d0d1-476c-a8de-878a79e3a34c": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Snow",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "d902ed8b-d0d1-476c-a8de-878a79e3a34c"
                    }
                }
            },
            "1161af82-50cf-47db-9706-0c3576d43c43": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.25,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_CoarseBristles",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "1161af82-50cf-47db-9706-0c3576d43c43"
                    }
                }
            },
            "5347acf0-a8e2-47b6-8346-30c70719d763": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.5,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_WigglyGraphite",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "5347acf0-a8e2-47b6-8346-30c70719d763"
                    }
                }
            },
            "f6e85de3-6dcc-4e7f-87fd-cee8c3d25d51": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "name": "brush_Electricity",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "f6e85de3-6dcc-4e7f-87fd-cee8c3d25d51"
                    }
                }
            },
            "44bb800a-fbc3-4592-8426-94ecb05ddec3": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Streamers",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "44bb800a-fbc3-4592-8426-94ecb05ddec3"
                    }
                }
            },
            "dce872c2-7b49-4684-b59b-c45387949c5c": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.5,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0,
                    "roughnessFactor": 0.5
                },
                "normalTexture": {
                    "texCoord": 0
                },
                "name": "brush_Hypercolor",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "dce872c2-7b49-4684-b59b-c45387949c5c"
                    }
                }
            },
            "89d104cd-d012-426b-b5b3-bbaee63ac43c": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Bubbles",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "89d104cd-d012-426b-b5b3-bbaee63ac43c"
                    }
                }
            },
            "b2ffef01-eaaa-4ab5-aa64-95a2c4f5dbc6": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "name": "brush_NeonPulse",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "b2ffef01-eaaa-4ab5-aa64-95a2c4f5dbc6"
                    }
                }
            },
            "700f3aa8-9a7c-2384-8b8a-ea028905dd8c": {
                "alphaMode": "MASK",
                "alphaCutoff": 0.55400002,
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_CelVinyl",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "700f3aa8-9a7c-2384-8b8a-ea028905dd8c"
                    }
                }
            },
            "6a1cf9f9-032c-45ec-9b6e-a6680bee32e9": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_HyperGrid",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "6a1cf9f9-032c-45ec-9b6e-a6680bee32e9"
                    }
                }
            },
            "4391aaaa-df81-4396-9e33-31e4e4930b27": {
                "alphaMode": "OPAQUE",
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0,
                    "roughnessFactor": 0.189999998
                },
                "name": "brush_LightWire",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "4391aaaa-df81-4396-9e33-31e4e4930b27"
                    }
                }
            },
            "0f0ff7b2-a677-45eb-a7d6-0cd7206f4816": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "name": "brush_ChromaticWave",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "0f0ff7b2-a677-45eb-a7d6-0cd7206f4816"
                    }
                }
            },
            "6a1cf9f9-032c-45ec-9b1d-a6680bee30f7": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Dots",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "6a1cf9f9-032c-45ec-9b1d-a6680bee30f7"
                    }
                }
            },
            "e0abbc80-0f80-e854-4970-8924a0863dcc": {
                "alphaMode": "OPAQUE",
                "doubleSided": true,
                "name": "brush_Petal",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "e0abbc80-0f80-e854-4970-8924a0863dcc"
                    }
                }
            },
            "2f212815-f4d3-c1a4-681a-feeaf9c6dc37": {
                "alphaMode": "OPAQUE",
                "alphaCutoff": 0.5,
                "pbrMetallicRoughness": {
                    "metallicFactor": 0,
                    "roughnessFactor": 0.850000024
                },
                "normalTexture": {
                    "texCoord": 0
                },
                "name": "brush_Icing",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "2f212815-f4d3-c1a4-681a-feeaf9c6dc37"
                    }
                }
            },
            "4391385a-df73-4396-9e33-31e4e4930b27": {
                "alphaMode": "OPAQUE",
                "name": "brush_Toon",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "4391385a-df73-4396-9e33-31e4e4930b27"
                    }
                }
            },
            "4391385a-cf83-4396-9e33-31e4e4930b27": {
                "alphaMode": "OPAQUE",
                "alphaCutoff": 0.0670000017,
                "doubleSided": true,
                "name": "brush_Wire",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "4391385a-cf83-4396-9e33-31e4e4930b27"
                    }
                }
            },
            "cf7f0059-7aeb-53a4-2b67-c83d863a9ffa": {
                "alphaMode": "OPAQUE",
                "name": "brush_Spikes",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "cf7f0059-7aeb-53a4-2b67-c83d863a9ffa"
                    }
                }
            },
            "d381e0f5-3def-4a0d-8853-31e9200bcbda": {
                "alphaMode": "OPAQUE",
                "name": "brush_Lofted",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "d381e0f5-3def-4a0d-8853-31e9200bcbda"
                    }
                }
            },
            "4391aaaa-df73-4396-9e33-31e4e4930b27": {
                "alphaMode": "OPAQUE",
                "name": "brush_Disco",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "4391aaaa-df73-4396-9e33-31e4e4930b27"
                    }
                }
            },
            "1caa6d7d-f015-3f54-3a4b-8b5354d39f81": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_Comet",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "1caa6d7d-f015-3f54-3a4b-8b5354d39f81"
                    }
                }
            },
            "faaa4d44-fcfb-4177-96be-753ac0421ba3": {
                "alphaMode": "OPAQUE",
                "alphaCutoff": 0.5,
                "doubleSided": true,
                "name": "brush_ShinyHull",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "faaa4d44-fcfb-4177-96be-753ac0421ba3"
                    }
                }
            },
            "79348357-432d-4746-8e29-0e25c112e3aa": {
                "alphaMode": "OPAQUE",
                "alphaCutoff": 0.5,
                "doubleSided": true,
                "name": "brush_MatteHull",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "79348357-432d-4746-8e29-0e25c112e3aa"
                    }
                }
            },
            "a8fea537-da7c-4d4b-817f-24f074725d6d": {
                "alphaMode": "OPAQUE",
                "alphaCutoff": 0.5,
                "doubleSided": true,
                "name": "brush_UnlitHull",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "a8fea537-da7c-4d4b-817f-24f074725d6d"
                    }
                }
            },
            "c8313697-2563-47fc-832e-290f4c04b901": {
                "alphaMode": "BLEND",
                "doubleSided": true,
                "pbrMetallicRoughness": {
                    "baseColorTexture": {
                        "texCoord": 0
                    },
                    "metallicFactor": 0
                },
                "name": "brush_DiamondHull",
                "extensions": {
                    "GOOGLE_tilt_brush_material": {
                        "guid": "c8313697-2563-47fc-832e-290f4c04b901"
                    }
                }
            }
        };
        if (this.brushPath.slice(this.brushPath.length - 1) !== "/") this.brushPath += "/";
        this.tiltShaderLoader = new (0, $cf098bb13503440d$export$bcc22bf437a07d8f)(parser.options.manager);
        this.tiltShaderLoader.setPath(brushPath);
        this.clock = new (0, $a0PbU$Clock)();
    }
    beforeRoot() {
        const parser = this.parser;
        const json = parser.json;
        if (!json.extensionsUsed || !json.extensionsUsed.includes(this.name)) return null;
        if (!json.extensionsUsed.includes("GOOGLE_tilt_brush_material")) json.extensionsUsed.push("GOOGLE_tilt_brush_material");
        json.materials.map((material, index)=>{
            const extensionsDef = material.extensions;
            if (!extensionsDef || !extensionsDef[this.name]) return;
            const guid = material.name.replace("material_", "");
            json.materials[index] = this.materialDefs[guid];
            let mainTexIndex = extensionsDef.GOOGLE_tilt_brush_techniques.values.MainTex;
            if (mainTexIndex !== undefined) json.materials[index].pbrMetallicRoughness.baseColorTexture.index = mainTexIndex;
            let bumpMapIndex = extensionsDef.GOOGLE_tilt_brush_techniques.values.BumpMap;
            if (bumpMapIndex !== undefined) json.materials[index].normalTexture.index = bumpMapIndex;
        });
    }
}




const GLTFGoogleTiltBrushMaterialExtension = $ca086492148dd3fa$export$2b011a5b12963d65;


const EMB={"MatteHull-79348357-432d-4746-8e29-0e25c112e3aa/MatteHull-79348357-432d-4746-8e29-0e25c112e3aa-v10.0-vertex.glsl": "#version 300 es\n// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n// Copyright 2020 The Tilt Brush Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n// DefaultVS.glsl\nin vec4 a_position;\nin vec3 a_normal;\nin vec4 a_color;\nin vec2 a_texcoord0;\n\nout vec4 v_color;\nout vec3 v_normal;  // Camera-space normal.\nout vec3 v_position;  // Camera-space position.\nout vec2 v_texcoord0;\nout vec3 v_light_dir_0;  // Camera-space light direction, main light.\nout vec3 v_light_dir_1;  // Camera-space light direction, other light.\nout float f_fog_coord;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\nuniform mat4 u_SceneLight_0_matrix;\nuniform mat4 u_SceneLight_1_matrix;\n\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * a_position;\n  f_fog_coord = gl_Position.z;\n  v_normal = normalMatrix * a_normal;\n  v_position = (modelViewMatrix * a_position).xyz;\n  v_light_dir_0 = mat3(u_SceneLight_0_matrix) * vec3(0, 0, 1);\n  v_light_dir_1 = mat3(u_SceneLight_1_matrix) * vec3(0, 0, 1);\n  v_color = a_color;\n  v_texcoord0 = a_texcoord0;\n}\n", "MatteHull-79348357-432d-4746-8e29-0e25c112e3aa/MatteHull-79348357-432d-4746-8e29-0e25c112e3aa-v10.0-fragment.glsl": "#version 300 es\n// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n// Brush-specific shader for GlTF web preview, based on General generator\n// with parameters lit=1, a=0.5.\n\nprecision mediump float;\n\nout vec4 fragColor;\n\nuniform vec4 u_ambient_light_color;\nuniform vec4 u_SceneLight_0_color;\nuniform vec4 u_SceneLight_1_color;\n\nin vec4 v_color;\nin vec3 v_normal;\nin vec3 v_position;\nin vec3 v_light_dir_0;\nin vec3 v_light_dir_1;\nin vec2 v_texcoord0;\n\nuniform sampler2D u_MainTex;\nuniform float u_Cutoff;\n\n// Copyright 2020 The Tilt Brush Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n// Fogging support\nuniform vec3 u_fogColor;\nuniform float u_fogDensity;\nin float f_fog_coord;\n\n// This fog function emulates the exponential fog used in Tilt Brush\n//\n// Details:\n//   * For exponential fog, Unity defines u_density = density / ln(2) on the CPU, sp that they can\n//        convert the base from e to 2 and use exp2 rather than exp. We might as well do the same.\n//   * The fog on Plya does not precisely match that in Unity, though it's very close.  Two known\n//        reasons for this are\n//          1) Clipping plans on Poly are different than in Tilt Brush.  Poly is .1:2000, Tilt\n//             Brush is .5:10000.\n//          2) Poly applies post processing (vignettes, etc...) that can subtly change the look\n//             of the fog.\n//   * Finally, Tilt Brush uses \"decimeters\" for legacy reasons.\n//        In order to convert Density values from TB to Poly, we multiply by 10.0 in order to\n//        convert decimeters to meters.\n//\n\nvec3 ApplyFog(vec3 color) {\n  // Per the top comment, we must modify the density value by Unity's ln(2) modification as well as\n  // a decimeter conversion\n  float density = (u_fogDensity / .693147) * 10.;\n\n  // This exponential fog function is copied directly from unity (see UnityCG.inc).\n  float fogFactor = f_fog_coord * density;\n  fogFactor = exp2(-fogFactor);\n  fogFactor = clamp( fogFactor, 0.0, 1.0 );\n  return mix(u_fogColor, color.xyz, fogFactor);\n}\n// Copyright 2020 The Tilt Brush Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n//\n// Standard BRDF Lighting\n//\n\nconst float PI = 3.141592654;\nconst float INV_PI = 0.318309886;\nconst vec3 GAMMA_DIELECTRIC_SPEC = vec3(0.220916301, 0.220916301, 0.220916301);\nconst float GAMMA_ONE_MINUS_DIELECTRIC = (1.0 - 0.220916301);\n\n// The following functions are based on similar ones in the Unity Standard BRDF\n// with minor changes for GLSL and unused #ifdef pruning.\n\nfloat Pow5(float x) {\n  return x * x * x * x * x;\n}\n\n// https://disney-animation.s3.amazonaws.com/library/s2012_pbs_disney_brdf_notes_v2.pdf\nfloat DisneyDiffuseTerm(float NdotV, float NdotL, float LdotH,\n                        float perceptualRoughness) {\n  float fd90 = 0.5 + 2.0 * LdotH * LdotH * perceptualRoughness;\n  float lightScatter = 1.0 + (fd90 - 1.0) * Pow5(1.0 - NdotL);\n  float viewScatter  = 1.0 + (fd90 - 1.0) * Pow5(1.0 - NdotV);\n  return lightScatter * viewScatter;\n}\n\nfloat SmithJointVisibilityTerm(float NdotL, float NdotV, float roughness) {\n  float lambdaV = NdotL * mix(NdotV, 1.0, roughness);\n  float lambdaL = NdotV * mix(NdotL, 1.0, roughness);\n  return 0.5 / (lambdaV + lambdaL + 1e-5);\n}\n\nfloat GgxDistributionTerm(float NdotH, float roughness) {\n  float a2 = roughness * roughness;\n  float d = (NdotH * a2 - NdotH) * NdotH + 1.0;\n  return INV_PI * a2 / (d * d + 1e-7);\n}\n\n// Implements Schlick's approximation to Fresnel. IoR is implied by\n// F0, which contains minimum reflectance values (per RGB color).\nvec3 FresnelTerm (vec3 F0, float cosA) {\n  float t = Pow5(1.0 - cosA);\n  return F0 + (vec3(1.0) - F0) * t;\n}\n\nvec3 SurfaceShaderInternal(\n    vec3 normal,  // Unit surface normal.\n    vec3 lightDir,  // Unit vector from shading point to light.\n    vec3 eyeDir,  // Unit vector from shading point to camera.\n    vec3 lightColor,  // RGB color of the light.\n    vec3 diffuseColor,  // Surface diffuse color.\n    vec3 specularColor,  // Surface specular color, also drives Fresnel.\n    float perceptualRoughness) {  // Unity's perceptual Roughness, in [0.0, 1.0].\n  float NdotL = clamp(dot(normal, lightDir), 0.0, 1.0);\n  float NdotV = abs(dot(normal, eyeDir));\n\n  vec3 halfVector = normalize(lightDir + eyeDir);\n  float NdotH = clamp(dot(normal, halfVector), 0.0, 1.0);\n  float LdotH = clamp(dot(lightDir, halfVector), 0.0, 1.0);\n\n  float diffuseTerm = NdotL *\n    DisneyDiffuseTerm(NdotV, NdotL, LdotH, perceptualRoughness);\n\n  if (length(specularColor) < 1e-5) {\n    return diffuseColor * (lightColor * diffuseTerm);\n  }\n\n  float roughness = perceptualRoughness * perceptualRoughness;\n\n  // The V term includes both the traditional G term and the BRDF divisors.\n  float V = GgxDistributionTerm(NdotH, roughness);\n  float D = SmithJointVisibilityTerm(NdotL, NdotV, roughness);\n  float specularTerm = V * D * PI;  // RGB-based Fresnel terms applied below.\n\n  specularTerm = sqrt(max(1e-4, specularTerm));  // For Gamma-space rendering.\n  specularTerm *= NdotL;\n\n  // Treats specularColor as spectral F0 components of Schlick's formula.\n  vec3 fresnelColor = FresnelTerm(specularColor, LdotH);\n\n  return lightColor *\n      (diffuseTerm * diffuseColor + specularTerm * fresnelColor);\n}\n\n// An emulation of Unity 5.5's Surface shader, minus the global\n// illumination part. Returns a per-light color contribution to the\n// shaded surface. Ambient illumination needs to be added separately.\nvec3 SurfaceShaderSpecularGloss(\n    vec3 normal,  // Unit surface normal.\n    vec3 lightDir,  // Unit vector from shading point to light.\n    vec3 eyeDir,  // Unit vector from shading point to camera.\n    vec3 lightColor,  // RGB color of the light.\n    vec3 albedoColor,  // Surface albedo color.\n    vec3 specularColor,  // Surface specular color, also drives Fresnel.\n    float gloss) {  // Unity's perceptual smoothness, in [0.0, 1.0].\n  float oneMinusSpecularIntensity =\n      1.0 - clamp(max(max(specularColor.r, specularColor.g), specularColor.b), 0., 1.);\n  vec3 diffuseColor = albedoColor * oneMinusSpecularIntensity;\n  float perceptualRoughness = 1.0 - gloss;\n\n  return SurfaceShaderInternal(\n      normal, lightDir, eyeDir, lightColor, diffuseColor, specularColor, perceptualRoughness);\n}\n\n// An emulation of Unity 5.5's Surface shader using MetallicSetup(), minus the global\n// illumination part. Returns a per-light color contribution to the\n// shaded surface. Ambient illumination needs to be added separately.\nvec3 SurfaceShaderMetallicRoughness(\n    vec3 normal,  // Unit surface normal.\n    vec3 lightDir,  // Unit vector from shading point to light.\n    vec3 eyeDir,  // Unit vector from shading point to camera.\n    vec3 lightColor,  // RGB color of the light.\n    vec3 albedoColor,  // Surface albedo color.\n    float metallic,  // Surface metallic value, drives specular color and reflectivity.\n    float perceptualRoughness) {  // Unity's perceptual Roughness, in [0.0, 1.0], sqrt of roughness.\n  vec3 specularColor = mix(GAMMA_DIELECTRIC_SPEC, albedoColor, metallic);\n  float oneMinusReflectivity = GAMMA_ONE_MINUS_DIELECTRIC - metallic * GAMMA_ONE_MINUS_DIELECTRIC;\n  vec3 diffuseColor = albedoColor * oneMinusReflectivity;\n\n  return SurfaceShaderInternal(\n      normal, lightDir, eyeDir, lightColor, diffuseColor, specularColor, perceptualRoughness);\n}\n\n//\n// An Approximation of Unity SH Lighting\n//\n\n// SH lighting needs to emulate Unity's SH light behavior.\n// -Diffuse contribution should be roughly 1/2\n// -Specularity should \"subtract\" from the diffuse contribution becuase\n//  the SH Lights in unity are not energy preserving.\n\nvec3 ShShaderWithSpec(\n    vec3 normal,  // Unit surface normal.\n    vec3 lightDir,  // Unit vector from shading point to light.\n    vec3 lightColor,  // RGB color of the light.\n    vec3 diffuseColor, // Surface diffuse color, i.e. albedo.\n    vec3 specularColor) {  // Specular color.  Used to replicate broken SH lighting\n                           // in unity which is not energy preserving\n  float specularGrayscale = dot(specularColor, vec3(0.3, 0.59, 0.11));\n  float NdotL = clamp(dot(normal, lightDir), 0.0, 1.0);\n  // Compensate for missing specular contribution\n  float shIntensityMultiplier = 1. - specularGrayscale;\n  shIntensityMultiplier *= shIntensityMultiplier;\n  return diffuseColor * lightColor * NdotL * shIntensityMultiplier;\n}\n\nvec3 ShShader(\n    vec3 normal,  // Unit surface normal.\n    vec3 lightDir,  // Unit vector from shading point to light.\n    vec3 lightColor,  // RGB color of the light.\n    vec3 diffuseColor) {  // Surface diffuse color, i.e. albedo\n  return ShShaderWithSpec(normal, lightDir, lightColor, diffuseColor, vec3(0.,0.,0.));\n}\n\n//\n// Lambert Lighting\n//\nvec3 LambertShader(\n    vec3 normal,  // Unit surface normal.\n    vec3 lightDir,  // Unit vector from shading point to light.\n    vec3 lightColor,  // RGB color of the light.\n    vec3 diffuseColor) {  // Surface diffuse color, i.e. albedo.\n  float NdotL = clamp(dot(normal, lightDir), 0.0, 1.0);\n  return diffuseColor * lightColor * NdotL;\n}\n\nvec3 computeLighting() {\n  vec3 normal = normalize(v_normal);\n  if (!gl_FrontFacing) {\n    // Always use front-facing normal for double-sided surfaces.\n    normal *= -1.0;\n  }\n  vec3 lightDir0 = normalize(v_light_dir_0);\n  vec3 lightDir1 = normalize(v_light_dir_1);\n\n  vec3 lightOut0 = LambertShader(normal, lightDir0,\n      u_SceneLight_0_color.rgb, v_color.rgb);\n  vec3 lightOut1 = ShShader(normal, lightDir1,\n      u_SceneLight_1_color.rgb, v_color.rgb);\n  vec3 ambientOut = v_color.rgb * u_ambient_light_color.rgb;\n\n  return (lightOut0 + lightOut1 + ambientOut);\n}\n\nvoid main() {\n    fragColor.rgb = ApplyFog(computeLighting());\n    fragColor.a = 1.0;\n}\n", "Bubbles-89d104cd-d012-426b-b5b3-bbaee63ac43c/Bubbles-89d104cd-d012-426b-b5b3-bbaee63ac43c-v10.0-vertex.glsl": "// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\nin vec4 a_position;\nin vec3 a_normal;\nin vec4 a_color;\nin vec4 a_texcoord0;\nin vec4 a_texcoord1;\n\nout vec4 v_color;\nout vec3 v_normal;  // Camera-space normal.\nout vec3 v_position;  // Camera-space position.\nout vec2 v_texcoord0;\nout vec3 v_light_dir_0;  // Camera-space light direction, main light.\nout vec3 v_light_dir_1;  // Camera-space light direction, other light.\n\nuniform mat4 viewMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform mat4 u_SceneLight_0_matrix;\nuniform mat4 u_SceneLight_1_matrix;\n\nuniform vec4 u_time;\nuniform float u_ScrollRate;\nuniform float u_ScrollJitterIntensity;\nuniform float u_ScrollJitterFrequency;\nuniform float u_SpreadRate;\nuniform float u_GeniusParticlePreviewLifetime;\nuniform bool u_isTiltInput;\n\n// -------------------------------------------------------------------------\n// Particle utilities (from Particles.cginc)\n// -------------------------------------------------------------------------\n\nconst float kRecipSquareRootOfTwo = 0.70710678;\n\nfloat GetParticleSizeAdjust(float birthTime) {\n  if (birthTime < 0.0) {\n    float life01 = clamp(\n      (u_time.y - abs(birthTime)) / u_GeniusParticlePreviewLifetime,\n      0.0,\n      1.0\n    );\n    return 1.0 - life01 * life01;\n  }\n  return 1.0;\n}\n\nfloat GetParticleHalfSize(vec3 corner, vec3 center, float birthTime) {\n  float adjust = u_isTiltInput ? GetParticleSizeAdjust(birthTime) : 1.0;\n  return length(corner - center) * kRecipSquareRootOfTwo * adjust;\n}\n\nfloat SpreadProgress(float birthTime) {\n  float age = max(0.0, abs(u_time.y) - abs(birthTime));\n  return 1.0 - exp(-u_SpreadRate * age);\n}\n\nvec3 recreateCorner(vec3 center, float corner, float rotation, float size) {\n  float c = cos(rotation);\n  float s = sin(rotation);\n\n  if (!u_isTiltInput) {\n    vec3 up = vec3(s, c, 0.0);\n    vec3 right = vec3(c, -s, 0.0);\n    float fUp = float(corner == 0.0 || corner == 1.0) * 2.0 - 1.0;\n    float fRight = float(corner == 0.0 || corner == 2.0) * 2.0 - 1.0;\n    center = (modelViewMatrix * vec4(center, 1.0)).xyz;\n    center += fRight * right * size;\n    center += fUp * up * size;\n    return (inverse(modelViewMatrix) * vec4(center, 1.0)).xyz;\n  }\n\n  mat4 cameraToObject = inverse(modelViewMatrix);\n  vec3 upIsh = (cameraToObject * vec4(0.0, 1.0, 0.0, 0.0)).xyz;\n  vec3 cameraPosition = (cameraToObject * vec4(0.0, 0.0, 0.0, 1.0)).xyz;\n  vec3 forward = center - cameraPosition;\n  vec3 right = normalize(cross(upIsh, forward));\n  vec3 up = normalize(cross(forward, right));\n\n  vec2 quadPosition = size * vec2(\n    float(corner == 1.0 || corner == 3.0) * 2.0 - 1.0,\n    float(corner == 2.0 || corner == 3.0) * 2.0 - 1.0\n  );\n  vec2 rotatedPosition = vec2(\n    c * quadPosition.x - s * quadPosition.y,\n    s * quadPosition.x + c * quadPosition.y\n  );\n\n  return center + right * rotatedPosition.x + up * rotatedPosition.y;\n}\n\nvec4 OrientParticle(vec3 center, float halfSize, float vertexId, float rotation) {\n  float corner = mod(vertexId, 4.0);\n  float scale = modelMatrix[1][1];\n  vec3 newCorner = recreateCorner(center, corner, rotation, halfSize * scale);\n  return vec4(newCorner, 1.0);\n}\n\n// -------------------------------------------------------------------------\n// Simplex noise (from Noise.cginc, ported to GLSL)\n// -------------------------------------------------------------------------\n\nvec3 mod289_v3(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_v2(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_v3(vec3 x) {\n  return mod289_v3(((x * 34.0) + 1.0) * x);\n}\n\nfloat snoise2D(vec2 v) {\n  const vec4 C = vec4(0.211324865405187,   // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,   // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,   // -1.0 + 2.0 * C.x\n                      0.024390243902439);  // 1.0 / 41.0\n\n  vec2 i  = floor(v + dot(v, C.yy));\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n  i = mod289_v2(i);\n  vec3 p = permute_v3(permute_v3(i.y + vec3(0.0, i1.y, 1.0))\n                                + i.x + vec3(0.0, i1.x, 1.0));\n\n  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);\n  m = m * m;\n  m = m * m;\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);\n\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nvec3 snoise3D(vec3 v) {\n  return vec3(\n    snoise2D(vec2(v.x, v.y)),\n    snoise2D(vec2(v.y, v.z)),\n    snoise2D(vec2(v.z, v.x))\n  );\n}\n\n// -------------------------------------------------------------------------\n// Curl noise (from Noise.cginc)\n// -------------------------------------------------------------------------\n\nfloat curlX(vec3 v, float d) {\n  return (\n    (snoise3D(vec3(v.x, v.y + d, v.z)).z - snoise3D(vec3(v.x, v.y - d, v.z)).z)\n   -(snoise3D(vec3(v.x, v.y, v.z + d)).y - snoise3D(vec3(v.x, v.y, v.z - d)).y)\n  ) / 2.0 / d;\n}\n\nfloat curlY(vec3 v, float d) {\n  return (\n    (snoise3D(vec3(v.x, v.y, v.z + d)).x - snoise3D(vec3(v.x, v.y, v.z - d)).x)\n   -(snoise3D(vec3(v.x + d, v.y, v.z)).z - snoise3D(vec3(v.x - d, v.y, v.z)).z)\n  ) / 2.0 / d;\n}\n\nfloat curlZ(vec3 v, float d) {\n  return (\n    (snoise3D(vec3(v.x + d, v.y, v.z)).y - snoise3D(vec3(v.x - d, v.y, v.z)).y)\n   -(snoise3D(vec3(v.x, v.y + d, v.z)).x - snoise3D(vec3(v.x, v.y - d, v.z)).x)\n  ) / 2.0 / d;\n}\n\n// -------------------------------------------------------------------------\n// Bubble displacement (from Bubbles.shader computeDisplacement)\n// -------------------------------------------------------------------------\n\n// Seed is expected in decimeter-scale coordinates (matching Unity).\n// Web geometry is in meters, so the caller must scale the seed by 10.\n// Output is in decimeters; the caller must scale by 0.1 to get meters.\nvec3 computeDisplacement(vec3 seed, float timeOffset) {\n  // Jitter\n  float t = u_time.y * u_ScrollRate + timeOffset;\n  vec3 jitter;\n  jitter.x = sin(t       + u_time.y + seed.z * u_ScrollJitterFrequency);\n  jitter.z = cos(t       + u_time.y + seed.x * u_ScrollJitterFrequency);\n  jitter.y = cos(t * 1.2 + u_time.y + seed.x * u_ScrollJitterFrequency);\n  jitter *= u_ScrollJitterIntensity;\n\n  // Curl noise\n  vec3 v = (seed + jitter) * 0.1 + u_time.x * 5.0;\n  float d = 30.0;\n  vec3 curl = vec3(curlX(v, d), curlY(v, d), curlZ(v, d)) * 10.0;\n\n  return jitter + curl;\n}\n\n// -------------------------------------------------------------------------\n// Main\n// -------------------------------------------------------------------------\n\nvoid main() {\n  float birthTime = a_texcoord0.w;\n  float halfSize = GetParticleHalfSize(a_position.xyz, a_normal, birthTime);\n  float spreadProgress = u_isTiltInput ? SpreadProgress(birthTime) : 1.0;\n  float rotation = a_texcoord0.z;\n\n  // Particles are authored with their stroke origin in texcoord1 and settle\n  // toward their final center over their lifetime.\n  vec3 center = u_isTiltInput ? mix(a_texcoord1.xyz, a_normal, spreadProgress) : a_normal;\n\n  // Orient particle to face camera (in object space)\n  vec4 pos = OrientParticle(center, halfSize, float(gl_VertexID), rotation);\n\n  // Transform to world space, then add displacement directly\n  // (matches Snow/Embers web pattern: displacement added in world space)\n  vec3 worldPos = (modelMatrix * pos).xyz;\n  vec3 worldCenter = (modelMatrix * vec4(center, 1.0)).xyz;\n\n  // Evaluate the Unity-space noise before reflecting its result back to Three's\n  // right-handed coordinates. Stroke geometry remains in Open Brush canvas units.\n  vec3 displacement;\n  if (u_isTiltInput) {\n    vec3 unityCenter = vec3(worldCenter.x, worldCenter.y, -worldCenter.z) * 10.0;\n    vec3 unityDisplacement = computeDisplacement(unityCenter, 1.0);\n    displacement = spreadProgress * 0.1 * vec3(\n      unityDisplacement.x, unityDisplacement.y, -unityDisplacement.z\n    );\n  } else {\n    displacement = computeDisplacement(worldCenter * 10.0, 1.0) * 0.1;\n  }\n  worldPos += displacement;\n\n  gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);\n  v_normal = normalize(normalMatrix * a_normal);\n  v_position = (viewMatrix * vec4(worldPos, 1.0)).xyz;\n  v_light_dir_0 = mat3(u_SceneLight_0_matrix) * vec3(0, 0, 1);\n  v_light_dir_1 = mat3(u_SceneLight_1_matrix) * vec3(0, 0, 1);\n  v_color = a_color;\n  // Brighten up the bubbles (matches Unity: o.color.a = 1)\n  v_color.a = 1.0;\n  v_texcoord0 = a_texcoord0.xy;\n}\n", "Bubbles-89d104cd-d012-426b-b5b3-bbaee63ac43c/Bubbles-89d104cd-d012-426b-b5b3-bbaee63ac43c-v10.0-fragment.glsl": "// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\nprecision mediump float;\n\nout vec4 fragColor;\n\nin vec4 v_color;\nin vec2 v_texcoord0;\nuniform sampler2D u_MainTex;\n\nvoid main() {\n  vec4 tex = texture(u_MainTex, v_texcoord0);\n  vec3 basecolor = v_color.rgb * tex.rgb;\n  \t\t\t\t\n  // Alpha channel of the texture is not affected by color.  It is the fake \"highlight\" bubble effect.\n  vec3 highlightcolor = tex.aaa;\n\n  fragColor.rgb = basecolor + highlightcolor;\n  fragColor.a = 1.0;\n}\n", "Bubbles-89d104cd-d012-426b-b5b3-bbaee63ac43c/Bubbles-89d104cd-d012-426b-b5b3-bbaee63ac43c-v10.0-MainTex.png": "data:image/png;base64,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", "DoubleTaperedMarker-0d3889f3-3ede-470c-8af4-de4813306126/DoubleTaperedMarker-0d3889f3-3ede-470c-8af4-de4813306126-v10.0-vertex.glsl": "#version 300 es\n// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n// Default shader for GlTF web preview.\n//\n// This shader is used as a fall-back when a brush-specific shader is\n// unavailable.\n\nin vec4 a_position;\nin vec3 a_normal;\nin vec4 a_color;\nin vec2 a_texcoord0;\nin vec3 a_texcoord1;\n\nout vec4 v_color;\nout vec3 v_normal;  // Camera-space normal.\nout vec3 v_position;  // Camera-space position.\nout vec2 v_texcoord0;\nout vec3 v_light_dir_0;  // Camera-space light direction, main light.\nout vec3 v_light_dir_1;  // Camera-space light direction, other light.\nout float f_fog_coord;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\nuniform mat4 u_SceneLight_0_matrix;\nuniform mat4 u_SceneLight_1_matrix;\n\nvoid main() {\n  float envelope = sin(a_texcoord0.x * 3.14159);\n  float widthMultiplier = 1.0 - envelope;\n  vec4 pos = a_position - vec4(a_texcoord1.xyz * widthMultiplier, 0.0);\n  gl_Position = projectionMatrix * modelViewMatrix * pos;\n  f_fog_coord = gl_Position.z;\n  v_normal = normalMatrix * a_normal;\n  v_position = (modelViewMatrix * a_position).xyz;\n  v_light_dir_0 = mat3(u_SceneLight_0_matrix) * vec3(0, 0, 1);\n  v_light_dir_1 = mat3(u_SceneLight_1_matrix) * vec3(0, 0, 1);\n  v_color = a_color;\n  v_texcoord0 = a_texcoord0.xy;\n}\n", "DoubleTaperedMarker-0d3889f3-3ede-470c-8af4-de4813306126/DoubleTaperedMarker-0d3889f3-3ede-470c-8af4-de4813306126-v10.0-fragment.glsl": "#version 300 es\n// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n// Brush-specific shader for GlTF web preview, based on General generator\n// with parameters lit=0, a=0.01.\n\nprecision mediump float;\n\nout vec4 fragColor;\n\nin vec4 v_color;\nin vec3 v_position;\nin vec2 v_texcoord0;\n\nuniform sampler2D u_MainTex;\nuniform float u_Cutoff;\n\n// Copyright 2020 The Tilt Brush Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n// Fogging support\nuniform vec3 u_fogColor;\nuniform float u_fogDensity;\nin float f_fog_coord;\n\n// This fog function emulates the exponential fog used in Tilt Brush\n//\n// Details:\n//   * For exponential fog, Unity defines u_density = density / ln(2) on the CPU, sp that they can\n//        convert the base from e to 2 and use exp2 rather than exp. We might as well do the same.\n//   * The fog on Plya does not precisely match that in Unity, though it's very close.  Two known\n//        reasons for this are\n//          1) Clipping plans on Poly are different than in Tilt Brush.  Poly is .1:2000, Tilt\n//             Brush is .5:10000.\n//          2) Poly applies post processing (vignettes, etc...) that can subtly change the look\n//             of the fog.\n//   * Finally, Tilt Brush uses \"decimeters\" for legacy reasons.\n//        In order to convert Density values from TB to Poly, we multiply by 10.0 in order to\n//        convert decimeters to meters.\n//\n\nvec3 ApplyFog(vec3 color) {\n  // Per the top comment, we must modify the density value by Unity's ln(2) modification as well as\n  // a decimeter conversion\n  float density = (u_fogDensity / .693147) * 10.;\n\n  // This exponential fog function is copied directly from unity (see UnityCG.inc).\n  float fogFactor = f_fog_coord * density;\n  fogFactor = exp2(-fogFactor);\n  fogFactor = clamp( fogFactor, 0.0, 1.0 );\n  return mix(u_fogColor, color.xyz, fogFactor);\n}\n\nvoid main() {\n    fragColor.rgb = ApplyFog(v_color.rgb);\n    fragColor.a = 1.0;\n}\n", "Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81/Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81-v10.0-vertex.glsl": "// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n// Copyright 2020 The Tilt Brush Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n// DefaultVS.glsl\nin vec4 a_position;\nin vec3 a_normal;\nin vec4 a_color;\nin vec2 a_texcoord0;\nin vec4 a_tangent;\n\nout vec4 v_color;\nout vec3 v_normal;  // Camera-space normal.\nout vec3 v_tangent;  // Camera-space tangent.\nout vec3 v_bitangent;  // Camera-space bitangent.\nout vec3 v_position;  // Camera-space position.\nout vec2 v_texcoord0;\nout vec3 v_light_dir_0;  // Camera-space light direction, main light.\nout vec3 v_light_dir_1;  // Camera-space light direction, other light.\nout float f_fog_coord;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\nuniform mat4 u_SceneLight_0_matrix;\nuniform mat4 u_SceneLight_1_matrix;\n\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * a_position;\n  f_fog_coord = gl_Position.z;\n  // Transform normal and tangent to view space\n  vec3 normal = normalize(normalMatrix * a_normal);\n  vec3 tangent = normalize(normalMatrix * a_tangent.xyz);\n  \n  // Compute bitangent using cross product and handedness\n  vec3 bitangent = cross(normal, tangent) * a_tangent.w;\n  \n  v_normal = normal;\n  v_tangent = tangent;\n  v_bitangent = bitangent;\n  v_position = (modelViewMatrix * a_position).xyz;\n  v_light_dir_0 = mat3(u_SceneLight_0_matrix) * vec3(0, 0, 1);\n  v_light_dir_1 = mat3(u_SceneLight_1_matrix) * vec3(0, 0, 1);\n  v_color = a_color;\n  v_texcoord0 = a_texcoord0;\n}\n", "Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81/Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81-v10.0-fragment.glsl": "// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\nprecision mediump float;\n\nout vec4 fragColor;\n\nuniform float u_Speed;\nuniform float u_EmissionGain;\nuniform sampler2D u_MainTex;\nuniform sampler2D u_AlphaMask;\nuniform vec4 u_AlphaMask_TexelSize;\nuniform vec4 u_time;\n\nin vec4 v_color;\nin vec2 v_texcoord0;\n\nvoid main() {\n  // Set up some staggered scrolling for \"fire\" effect\n  float time = u_time.y * -u_Speed;\n  vec2 scrollUV = v_texcoord0;\n  vec2 scrollUV2 = v_texcoord0;\n  vec2 scrollUV3 = v_texcoord0;\n  scrollUV.y += time; // a little twisting motion\n  scrollUV.x += time;\n  scrollUV2.x += time * 1.5;\n  scrollUV3.x += time * 0.5;\n\n  // Each channel has its own tileable pattern which we want to scroll against one another\n  // at different rates. We pack 'em into channels because it's more performant than\n  // using 3 different texture lookups.\n  float r = texture(u_MainTex, scrollUV).r;\n  float g = texture(u_MainTex, scrollUV2).g;\n  float b = texture(u_MainTex, scrollUV3).b;\n\n  // Combine all channels\n  float gradient_lookup_value = (r + g + b) / 3.0;\n  // Rescales the lookup value from start to finish.\n  gradient_lookup_value *= (1.0 - v_texcoord0.x); \n  gradient_lookup_value = (pow(gradient_lookup_value, 2.0) + 0.125) * 3.0;\n\n  float falloff = max((0.2 - v_texcoord0.x) * 5.0, 0.0);\n  // TODO: this shouldn't be necessary, but it seems the WebGL texture wrap mode doesn't\n  //       match Unity texture wrap mode.\n  float gutter = u_AlphaMask_TexelSize.x * .5;\n  float u = clamp(gradient_lookup_value + falloff, 0.0 + gutter, 1.0 - gutter);\n  vec4 tex = texture(u_AlphaMask, vec2(u, 0.0));\n\n  fragColor.rgb = (tex * v_color).rgb;\n  fragColor.a = 1.0;\n}\n\n", "Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81/Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81-v10.0-MainTex.png": "data:image/png;base64,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", "Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81/Comet-1caa6d7d-f015-3f54-3a4b-8b5354d39f81-v10.0-AlphaMask.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAIAAADhDz9AAAAAL0lEQVR4nGNkIBswMjBwoAowMjIxMhnpGft6+pBtqrWyGQcrirksbCxm/ta41AMA2y8C/6apfPAAAAAASUVORK5CYII=", "Dots-6a1cf9f9-032c-45ec-9b1d-a6680bee30f7/Dots-6a1cf9f9-032c-45ec-9b1d-a6680bee30f7-v10.0-MainTex.png": "data:image/png;base64,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", "Dots-6a1cf9f9-032c-45ec-9b1d-a6680bee30f7/Dots-6a1cf9f9-032c-45ec-9b1d-a6680bee30f7-v10.0-fragment.glsl": "// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\nprecision mediump float;\n\nout vec4 fragColor;\n\nin vec4 v_color;\nin vec2 v_texcoord0;\nuniform sampler2D u_MainTex;\nuniform vec4 u_TintColor;\nuniform float u_EmissionGain;\nuniform float u_BaseGain;\n\nvoid main() {\n  vec4 tex = texture(u_MainTex, v_texcoord0);\n  vec4 c = v_color * u_TintColor * u_BaseGain * tex;\n  c.rgb += c.rgb * c.a * u_EmissionGain;\n\n  fragColor.rgb = c.rgb;\n  fragColor.a = 1.0;\n}\n", "Dots-6a1cf9f9-032c-45ec-9b1d-a6680bee30f7/Dots-6a1cf9f9-032c-45ec-9b1d-a6680bee30f7-v10.0-vertex.glsl": "// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\nin vec4 a_position;\nin vec3 a_normal;\nin vec4 a_color;\nin vec4 a_texcoord0;\nin vec4 a_texcoord1;\n\nout vec4 v_color;\nout vec3 v_normal;  // Camera-space normal.\nout vec3 v_tangent;  // Camera-space tangent.\nout vec3 v_bitangent;  // Camera-space bitangent.\nout vec3 v_position;  // Camera-space position.\nout vec2 v_texcoord0;\nout vec3 v_light_dir_0;  // Camera-space light direction, main light.\nout vec3 v_light_dir_1;  // Camera-space light direction, other light.\n\nuniform mat4 viewMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform mat4 u_SceneLight_0_matrix;\nuniform mat4 u_SceneLight_1_matrix;\nuniform vec4 u_time;\nuniform float u_GeniusParticlePreviewLifetime;\nuniform bool u_isTiltInput;\n\n// Copyright 2020 The Tilt Brush Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\nconst float kRecipSquareRootOfTwo = 0.70710678;\n\nfloat GetParticleSizeAdjust(float birthTime) {\n  if (birthTime < 0.0) {\n    float life01 = clamp(\n      (u_time.y - abs(birthTime)) / u_GeniusParticlePreviewLifetime,\n      0.0,\n      1.0\n    );\n    return 1.0 - life01 * life01;\n  }\n  return 1.0;\n}\n\nfloat GetParticleHalfSize(vec3 corner, vec3 center, float birthTime) {\n  float adjust = u_isTiltInput ? GetParticleSizeAdjust(birthTime) : 1.0;\n  return length(corner - center) * kRecipSquareRootOfTwo * adjust;\n}\n\n// Given a centerpoint, up and right vectors, the particle rotation and vertex index,\n// This will create the appropriate position of a quad that faces the camera.\nvec3 recreateCorner(vec3 center, float corner, float rotation, float size) {\n  float c = cos(rotation);\n  float s = sin(rotation);\n\n  if (!u_isTiltInput) {\n    vec3 up = vec3(s, c, 0.0);\n    vec3 right = vec3(c, -s, 0.0);\n    float fUp = float(corner == 0.0 || corner == 1.0) * 2.0 - 1.0;\n    float fRight = float(corner == 0.0 || corner == 2.0) * 2.0 - 1.0;\n    center = (modelViewMatrix * vec4(center, 1.0)).xyz;\n    center += fRight * right * size;\n    center += fUp * up * size;\n    return (inverse(modelViewMatrix) * vec4(center, 1.0)).xyz;\n  }\n\n  mat4 cameraToObject = inverse(modelViewMatrix);\n  vec3 upIsh = (cameraToObject * vec4(0.0, 1.0, 0.0, 0.0)).xyz;\n  vec3 cameraPosition = (cameraToObject * vec4(0.0, 0.0, 0.0, 1.0)).xyz;\n  vec3 forward = center - cameraPosition;\n  vec3 right = normalize(cross(upIsh, forward));\n  vec3 up = normalize(cross(forward, right));\n\n  // Corner diagram:\n  //\n  //   2 . . . 3\n  //   .   |   .\n  //   . - c - < --- center\n  //   .   |   .\n  //   0 . . . 1\n  //\n  // The top corners are corners 2 & 3\n  float fUp = float(corner == 2.0 || corner == 3.0) * 2.0 - 1.0;\n\n  // The corners to the right are corners 1 & 3\n  float fRight = float(corner == 1.0 || corner == 3.0) * 2.0 - 1.0;\n\n  vec2 rotatedPosition = vec2(\n    c * fRight - s * fUp,\n    s * fRight + c * fUp\n  ) * size;\n  return center + right * rotatedPosition.x + up * rotatedPosition.y;\n}\n\n// Adjusts the vertex of a quad to make a camera-facing quad. Also optionally scales the particle if\n// the particle is in the preview brush.\nvec4 PositionParticle(\n\tfloat vertexId,\n\tvec4 vertexPos,\n\tvec3 center,\n\tfloat rotation) {\n\n\tfloat corner = mod(vertexId, 4.0);\n\tfloat size = GetParticleHalfSize(vertexPos.xyz, center, a_texcoord0.w);\n\n\t// Gets the scale from the model matrix\n\tfloat scale = modelMatrix[1][1];\n\tvec3 newCorner = recreateCorner(center, corner, rotation, size * scale);\n\n\treturn vec4(newCorner.x, newCorner.y, newCorner.z, 1);\n}\n\n// Returns the particle position for this vertex, untransformed, in local/object space.\nvec4 GetParticlePositionLS() {\n\treturn PositionParticle(float(gl_VertexID), a_position, a_normal, a_texcoord0.z);\n}\n// ---------------------------------------------------------------------------------------------- //\n// ---------------------------------------------------------------------------------------------- //\n\nvoid main() {\n  vec4 pos = GetParticlePositionLS();\n\n  gl_Position = projectionMatrix * modelViewMatrix * pos;\n  // Transform normal view space\n  v_normal = normalize(normalMatrix * a_normal);\n  v_position = (modelViewMatrix * pos).xyz;\n  v_light_dir_0 = mat3(u_SceneLight_0_matrix) * vec3(0, 0, 1);\n  v_light_dir_1 = mat3(u_SceneLight_1_matrix) * vec3(0, 0, 1);\n  v_color = a_color;\n  v_texcoord0 = a_texcoord0.xy;\n}\n", "Streamers-44bb800a-fbc3-4592-8426-94ecb05ddec3/Streamers-44bb800a-fbc3-4592-8426-94ecb05ddec3-v10.0-vertex.glsl": "// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n// Copyright 2020 The Tilt Brush Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n// DefaultVS.glsl\nin vec4 a_position;\nin vec3 a_normal;\nin vec4 a_color;\nin vec2 a_texcoord0;\nin vec4 a_tangent;\n\nout vec4 v_color;\nout vec3 v_normal;  // Camera-space normal.\nout vec3 v_tangent;  // Camera-space tangent.\nout vec3 v_bitangent;  // Camera-space bitangent.\nout vec3 v_position;  // Camera-space position.\nout vec2 v_texcoord0;\nout vec3 v_light_dir_0;  // Camera-space light direction, main light.\nout vec3 v_light_dir_1;  // Camera-space light direction, other light.\nout float f_fog_coord;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\nuniform mat4 u_SceneLight_0_matrix;\nuniform mat4 u_SceneLight_1_matrix;\n\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * a_position;\n  f_fog_coord = gl_Position.z;\n  // Transform normal and tangent to view space\n  vec3 normal = normalize(normalMatrix * a_normal);\n  vec3 tangent = normalize(normalMatrix * a_tangent.xyz);\n  \n  // Compute bitangent using cross product and handedness\n  vec3 bitangent = cross(normal, tangent) * a_tangent.w;\n  \n  v_normal = normal;\n  v_tangent = tangent;\n  v_bitangent = bitangent;\n  v_position = (modelViewMatrix * a_position).xyz;\n  v_light_dir_0 = mat3(u_SceneLight_0_matrix) * vec3(0, 0, 1);\n  v_light_dir_1 = mat3(u_SceneLight_1_matrix) * vec3(0, 0, 1);\n  v_color = a_color;\n  v_texcoord0 = a_texcoord0;\n}\n", "Streamers-44bb800a-fbc3-4592-8426-94ecb05ddec3/Streamers-44bb800a-fbc3-4592-8426-94ecb05ddec3-v10.0-MainTex.png": "data:image/png;base64,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", "Streamers-44bb800a-fbc3-4592-8426-94ecb05ddec3/Streamers-44bb800a-fbc3-4592-8426-94ecb05ddec3-v10.0-fragment.glsl": "// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\nprecision mediump float;\n\nout vec4 fragColor;\n\nin vec4 v_color;\nin vec2 v_texcoord0;\n\nuniform sampler2D u_MainTex;\nuniform vec4 u_TintColor;\nuniform float u_EmissionGain;\nuniform vec4 u_time;\n\nfloat rand_1_05(vec2 uv) {\n\t\tfloat noise = (fract(sin(dot(uv,vec2(12.9898,78.233)*2.0)) * 43758.5453));\n\t\treturn noise;\n\t}\n\nvoid main() {\n  \t// Create parametric flowing UV's\n\tvec2 uvs = v_texcoord0;\n\tfloat row_id = floor(uvs.y * 5.0);\n\tfloat row_rand = rand_1_05( vec2(row_id, row_id));\n\tuvs.x += row_rand * 200.0;\n\n\tvec2 sins = sin(uvs.x * vec2(10.0,23.0) + u_time.z * vec2(5.0,3.0));\n\tuvs.y = 5.0 * uvs.y + dot(vec2(.05, -.05), sins);\n\n\t// Scrolling UVs\n\tuvs.x *= .5 + row_rand * .3;\n\tuvs.x -= u_time.y * (1.0 + mod(row_id * 1.61803398875, 1.0) - 0.5);\n\n\t// Sample final texture\n\tvec4 tex = texture(u_MainTex, uvs);\n\n\t// Boost hot spot in texture\n\ttex += pow(tex, vec4(2.0,2.0,2.0,2.0)) * 55.0;\n\n\t// Clean up border pixels filtering artifacts\n\ttex *= mod(uvs.y,1.0); // top edge\n\ttex *= mod(uvs.y,1.0); // top edge\n\ttex *= 1.0 - mod(uvs.y,1.0); // bottom edge\n\ttex *= 1.0 - mod(uvs.y,1.0); // bottom edg\n\n\tvec4 color = v_color * tex * exp(u_EmissionGain * 5.0);\n\tfragColor = vec4(color.rgb * color.a,1.0);\n\n}\n", "Light-2241cd32-8ba2-48a5-9ee7-2caef7e9ed62/Light-2241cd32-8ba2-48a5-9ee7-2caef7e9ed62-v10.0-MainTex.png": "data:image/png;base64,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", "Light-2241cd32-8ba2-48a5-9ee7-2caef7e9ed62/Light-2241cd32-8ba2-48a5-9ee7-2caef7e9ed62-v10.0-fragment.glsl": "// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\nprecision mediump float;\n\nout vec4 fragColor;\n\nuniform float u_EmissionGain;\nuniform sampler2D u_MainTex;\n\nin vec4 v_color;\nin vec2 v_texcoord0;\n\n// TODO: This should be pulled into the vertex shader for performance.\nvec4 bloomColor(vec4 color, float gain) {\n  // Guarantee that there's at least a little bit of all 3 channels.\n  // This makes fully-saturated strokes (which only have 2 non-zero\n  // color channels) eventually clip to white rather than to a secondary.\n  float cmin = length(color.rgb) * .05;\n  color.rgb = max(color.rgb, vec3(cmin, cmin, cmin));\n  // If we try to remove this pow() from .a, it brightens up\n  // pressure-sensitive strokes; looks better as-is.\n  color.r = pow(color.r, 2.2);\n  color.g = pow(color.g, 2.2);\n  color.b = pow(color.b, 2.2);\n  color.a = pow(color.a, 2.2);\n  color.rgb *= 2.0 * exp(gain * 10.0);\n  return color;\n}\n\nvoid main() {\n  float brush_mask = texture(u_MainTex, v_texcoord0).w;\n    fragColor = brush_mask * bloomColor(v_color, u_EmissionGain);\n}\n", "Light-2241cd32-8ba2-48a5-9ee7-2caef7e9ed62/Light-2241cd32-8ba2-48a5-9ee7-2caef7e9ed62-v10.0-vertex.glsl": "// Copyright 2020 The Tilt Brush Authors\n// Updated to OpenGL ES 3.0 by the Icosa Gallery Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n// Copyright 2020 The Tilt Brush Authors\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n// DefaultVS.glsl\nin vec4 a_position;\nin vec3 a_normal;\nin vec4 a_color;\nin vec2 a_texcoord0;\nin vec4 a_tangent;\n\nout vec4 v_color;\nout vec3 v_normal;  // Camera-space normal.\nout vec3 v_tangent;  // Camera-space tangent.\nout vec3 v_bitangent;  // Camera-space bitangent.\nout vec3 v_position;  // Camera-space position.\nout vec2 v_texcoord0;\nout vec3 v_light_dir_0;  // Camera-space light direction, main light.\nout vec3 v_light_dir_1;  // Camera-space light direction, other light.\nout float f_fog_coord;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\nuniform mat4 u_SceneLight_0_matrix;\nuniform mat4 u_SceneLight_1_matrix;\n\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * a_position;\n  f_fog_coord = gl_Position.z;\n  // Transform normal and tangent to view space\n  vec3 normal = normalize(normalMatrix * a_normal);\n  vec3 tangent = normalize(normalMatrix * a_tangent.xyz);\n  \n  // Compute bitangent using cross product and handedness\n  vec3 bitangent = cross(normal, tangent) * a_tangent.w;\n  \n  v_normal = normal;\n  v_tangent = tangent;\n  v_bitangent = bitangent;\n  v_position = (modelViewMatrix * a_position).xyz;\n  v_light_dir_0 = mat3(u_SceneLight_0_matrix) * vec3(0, 0, 1);\n  v_light_dir_1 = mat3(u_SceneLight_1_matrix) * vec3(0, 0, 1);\n  v_color = a_color;\n  v_texcoord0 = a_texcoord0;\n}\n"};
// Glowing (additive) brushes write opaque black where their texture is empty; derive alpha from brightness so black = transparent.
const ADD={Comet:1,Light:1,Bubbles:1,Dots:1,Streamers:1,Fire:1,Embers:1,Electricity:1};
const BR=new URL('../brushes/',import.meta.url).href; // brushes not embedded below are loaded from /brushes
window.__bt=async p=>{
  let t=(EMB[p]??await (await fetch(BR+p)).text()).replace(/^[ \t]*#version[^\n]*\n/m,''); const b=p.split('-')[0];
  if(ADD[b]&&p.endsWith('fragment.glsl'))
    t=t.replace(/void\s+main\s*\(\s*\)/,'void ob_main()')+'\nvoid main(){ob_main();fragColor.a=max(fragColor.r,max(fragColor.g,fragColor.b));}\n';
  if(b==='Bubbles'&&p.endsWith('vertex.glsl'))   // keep drift in object space so it scales with the model
    t=t.replace('vec3 worldCenter = (modelMatrix * vec4(center, 1.0)).xyz;','vec3 worldCenter = center;')
       .replace('worldPos += displacement;','worldPos += displacement * length(modelMatrix[0].xyz);');
  return t;
};
window.__tx=p=>new Promise((res,rej)=>new THREE.TextureLoader().load(EMB[p]??BR+p,res,undefined,rej));
window.__fix=(n,p)=>{
  if(ADD[n]){p.blending=THREE.CustomBlending;p.blendEquation=p.blendEquationAlpha=THREE.AddEquation;
    p.blendSrc=p.blendDst=p.blendSrcAlpha=p.blendDstAlpha=THREE.OneFactor;p.premultipliedAlpha=false}
  if(n==='Smoke'||n==='SoftHighlighter'){ // these shaders always write alpha 1: add their glow but leave the page's alpha alone (no black halo)
    p.blending=THREE.CustomBlending;p.blendEquation=p.blendEquationAlpha=THREE.AddEquation;
    p.blendSrc=p.blendDst=THREE.OneFactor;p.blendSrcAlpha=THREE.ZeroFactor;p.blendDstAlpha=THREE.OneFactor;
    p.premultipliedAlpha=false;p.transparent=true;p.depthWrite=false}
  if(n==='Bubbles'){ // this library build omits the Bubbles animation uniforms
    const u=p.uniforms; u.u_time={value:new THREE.Vector4()};
    u.u_ScrollRate={value:1};u.u_ScrollJitterIntensity={value:1};u.u_ScrollJitterFrequency={value:1};
    u.u_SpreadRate={value:1};u.u_GeniusParticlePreviewLifetime={value:0};u.u_isTiltInput={value:false};
  }
};

export { GLTFGoogleTiltBrushMaterialExtension };
