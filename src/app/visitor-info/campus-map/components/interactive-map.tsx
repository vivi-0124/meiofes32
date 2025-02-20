'use client';

import { useState } from 'react';
import { Button } from '@/../components/ui/button';
import { Minus, Plus, HelpCircle } from 'lucide-react';

interface InteractiveMapProps {
  mapType: 'all' | 'food' | 'stage' | 'exhibit' | 'facility';
}

export function InteractiveMap({ mapType }: InteractiveMapProps) {
  const [zoom, setZoom] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [showLegend, setShowLegend] = useState(false);

  // マップを拡大・縮小する
  const handleZoomIn = () => {
    if (zoom < 1.5) setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    if (zoom > 0.8) setZoom(zoom - 0.1);
  };

  // 凡例の表示切り替え
  const toggleLegend = () => {
    setShowLegend(!showLegend);
  };

  // 選択エリアの詳細情報
  const getLocationDetails = () => {
    if (!selectedLocation) return null;

    const details: Record<string, { title: string; description: string }> = {
      'central-food': {
        title: '中央模擬店エリア',
        description: '30以上の模擬店が集まる大学祭の中心エリア。各サークルによる多彩な飲食ブースをお楽しみください。',
      },
      'south-food': {
        title: '南広場フードコート',
        description: '屋外ステージを見ながら食事が楽しめるエリア。テーブルと椅子が設置され、ゆったりとお食事いただけます。',
      },
      'main-stage': {
        title: 'メインステージ',
        description: '大学祭の目玉となる大型ステージ。有名アーティストのライブやダンスパフォーマンスが行われます。',
      },
      'outdoor-stage': {
        title: '屋外ステージ',
        description: 'アコースティックライブやトークショーに最適な小規模ステージ。緑に囲まれた開放的な空間です。',
      },
      // その他のエリア情報...
    };

    return details[selectedLocation] || { title: '選択エリア', description: '詳細情報はありません' };
  };

  const locationDetails = getLocationDetails();

  return (
    <div className="space-y-4">
      {/* マップコントロール */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleZoomOut}
            disabled={zoom <= 0.8}
            aria-label="縮小"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleZoomIn}
            disabled={zoom >= 1.5}
            aria-label="拡大"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLegend}
          className="flex items-center gap-1"
        >
          <HelpCircle className="h-4 w-4" />
          <span>凡例</span>
        </Button>
      </div>

      {/* マップ表示エリア */}
      <div className="relative w-full bg-muted rounded-lg overflow-hidden" style={{ height: '500px' }}>
        {/* 簡易的なマップ表現 */}
        <div 
          className="relative w-full h-full bg-[#f5f5f5] dark:bg-gray-800 transition-transform duration-300 p-4"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
        >
          {/* 基本マップレイアウト - グリッド線 */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
            {Array(10).fill(0).map((_, i) => (
              <div key={`col-${i}`} className="border-r border-gray-300 dark:border-gray-700 h-full" style={{ left: `${i * 10}%` }} />
            ))}
            {Array(10).fill(0).map((_, i) => (
              <div key={`row-${i}`} className="border-b border-gray-300 dark:border-gray-700 w-full" style={{ top: `${i * 10}%` }} />
            ))}
          </div>

          {/* 基本的な建物と道路 */}
          <div className="absolute left-[10%] top-[20%] w-[15%] h-[40%] bg-gray-200 dark:bg-gray-700 rounded-md">
            <div className="text-xs text-center mt-2">A棟</div>
          </div>
          <div className="absolute left-[35%] top-[20%] w-[15%] h-[40%] bg-gray-200 dark:bg-gray-700 rounded-md">
            <div className="text-xs text-center mt-2">B棟</div>
          </div>
          <div className="absolute right-[15%] top-[20%] w-[15%] h-[30%] bg-gray-200 dark:bg-gray-700 rounded-md">
            <div className="text-xs text-center mt-2">芸術棟</div>
          </div>

          {/* 中央広場 */}
          <div className="absolute left-[30%] top-[65%] w-[40%] h-[25%] bg-green-100 dark:bg-green-900/30 rounded-full">
            <div className="text-xs text-center mt-8">中央広場</div>
          </div>

          {/* 主要道路 */}
          <div className="absolute left-[48%] top-[0%] w-[4%] h-[100%] bg-gray-300 dark:bg-gray-600"></div>
          <div className="absolute left-[0%] top-[48%] w-[100%] h-[4%] bg-gray-300 dark:bg-gray-600"></div>

          {/* マップタイプに応じたオーバーレイ */}
          {mapType === 'food' && (
            <>
              <div className="absolute left-[25%] top-[40%] w-[30%] h-[20%] bg-orange-500/30 rounded-md border-2 border-orange-500 cursor-pointer" 
                onClick={() => setSelectedLocation('central-food')}>
                <div className="text-xs text-center mt-8">中央模擬店エリア</div>
              </div>
              <div className="absolute right-[15%] top-[60%] w-[20%] h-[15%] bg-orange-500/30 rounded-md border-2 border-orange-500 cursor-pointer"
                onClick={() => setSelectedLocation('south-food')}>
                <div className="text-xs text-center mt-4">南広場フードコート</div>
              </div>
            </>
          )}

          {mapType === 'stage' && (
            <>
              <div className="absolute left-[40%] top-[25%] w-[20%] h-[15%] bg-pink-500/30 rounded-md border-2 border-pink-500 cursor-pointer"
                onClick={() => setSelectedLocation('main-stage')}>
                <div className="text-xs text-center mt-4">メインステージ</div>
              </div>
              <div className="absolute right-[20%] top-[65%] w-[15%] h-[10%] bg-pink-500/30 rounded-md border-2 border-pink-500 cursor-pointer"
                onClick={() => setSelectedLocation('outdoor-stage')}>
                <div className="text-xs text-center mt-2">屋外ステージ</div>
              </div>
            </>
          )}

          {/* 他のマップタイプの実装... */}
        </div>
      </div>

      {/* 選択エリアの詳細情報 */}
      {selectedLocation && locationDetails && (
        <div className="mt-4 p-4 bg-card border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">{locationDetails.title}</h3>
          <p className="text-muted-foreground">{locationDetails.description}</p>
        </div>
      )}

      {/* 凡例 */}
      {showLegend && (
        <div className="mt-4 p-4 bg-card border rounded-lg">
          <h3 className="text-base font-medium mb-3">凡例</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-orange-500/50 border border-orange-500 mr-2"></div>
              <span className="text-sm">飲食エリア</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-pink-500/50 border border-pink-500 mr-2"></div>
              <span className="text-sm">ステージ</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500/50 border border-blue-500 mr-2"></div>
              <span className="text-sm">展示</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500/50 border border-green-500 mr-2"></div>
              <span className="text-sm">施設</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}