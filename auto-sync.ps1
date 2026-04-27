# Auto-sync Angular folder with GitHub
# This script automatically commits and pushes changes at regular intervals

param(
    [int]$IntervalSeconds = 300  # Default: 5 minutes
)

$gitPath = "d:\WebTech\angular"
$maxRetries = 3

while ($true) {
    try {
        Push-Location $gitPath
        
        # Check if there are any changes
        $status = git status --porcelain
        
        if ($status) {
            Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Changes detected. Committing and pushing..." -ForegroundColor Green
            
            # Stage all changes
            git add .
            
            # Commit with timestamp
            $commitMsg = "Auto-sync: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
            git commit -m $commitMsg
            
            # Push to GitHub (with retry logic)
            $retryCount = 0
            while ($retryCount -lt $maxRetries) {
                try {
                    git push origin master
                    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Successfully pushed to GitHub" -ForegroundColor Green
                    break
                }
                catch {
                    $retryCount++
                    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Push failed (attempt $retryCount/$maxRetries). Retrying..." -ForegroundColor Yellow
                    if ($retryCount -ge $maxRetries) {
                        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Push failed after $maxRetries attempts" -ForegroundColor Red
                    }
                    Start-Sleep -Seconds 10
                }
            }
        }
        else {
            Write-Host "[$(Get-Date -Format 'HH:mm:ss')] No changes detected" -ForegroundColor Gray
        }
        
        Pop-Location
    }
    catch {
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Error: $_" -ForegroundColor Red
    }
    
    # Wait for next check
    Write-Host "Waiting $IntervalSeconds seconds until next check..." -ForegroundColor Cyan
    Start-Sleep -Seconds $IntervalSeconds
}
