$root = 'C:\Users\ROG\Documents\Binus Document\Enrichment 2\Tugas\company-crustea\public\images\landing'
$exts = @('*.jpg','*.jpeg','*.png','*.webp')
$results = @()
foreach ($file in Get-ChildItem -Path $root -Recurse -Include $exts) {
  $path = $file.FullName
  $size = $file.Length
  $width = $null; $height = $null
  try {
    Add-Type -AssemblyName PresentationCore -ErrorAction SilentlyContinue
    $uri = [Uri]::new($path)
    $decoder = [System.Windows.Media.Imaging.BitmapDecoder]::Create($uri, [System.Windows.Media.Imaging.BitmapCreateOptions]::IgnoreColorProfile, [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad)
    if ($decoder.Frames.Count -gt 0) {
      $frame = $decoder.Frames[0]
      $width = $frame.PixelWidth
      $height = $frame.PixelHeight
    }
  } catch {}
  if ($width -eq $null -or $height -eq $null) {
    try {
      $img = [System.Drawing.Image]::FromFile($path)
      $width = $img.Width; $height = $img.Height; $img.Dispose()
    } catch {}
  }
  $results += [PSCustomObject]@{ Path = $path; Name = $file.Name; Size=$size; Width=$width; Height=$height }
}
$results | ConvertTo-Json -Depth 5 | Out-File -Encoding utf8 ".\.scripts\landing-images.json"
Write-Host "Written ./.scripts/landing-images.json"
