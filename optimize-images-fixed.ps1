# optimize-images-fixed.ps1
Write-Host "🚀 Начинаем оптимизацию изображений..." -ForegroundColor Green

$galleryPath = "public\img\gallery"
$slidesPath = "public\img\slides"
$housesPath = "public\img\houses"

function Optimize-Images {
    param($path)
    
    if (Test-Path $path) {
        Write-Host "📁 Обработка папки: $path" -ForegroundColor Yellow
        
        $images = Get-ChildItem -Path $path -Include "*.jpg", "*.jpeg", "*.png"
        
        foreach ($image in $images) {
            Write-Host "  Файл: $($image.Name) - Размер: $([math]::Round($image.Length/1KB)) KB" -ForegroundColor Cyan
        }
    }
}

Optimize-Images $galleryPath
Optimize-Images $slidesPath
Optimize-Images $housesPath

Write-Host "`n✅ Проверка завершена!" -ForegroundColor Green