$targets = @(
    @{N='东大'; U='https://www.u-tokyo.ac.jp/en/prospective-students/graduate_admissions.html'},
    @{N='京大'; U='https://www.kyoto-u.ac.jp/en/graduate'},
    @{N='早稻田'; U='https://www.waseda.jp/inst/admission/en/graduate/'},
    @{N='庆应'; U='https://www.keio.ac.jp/en/academics/graduate/'},
    @{N='名大'; U='https://www.nagoya-u.ac.jp/en/academics/'},
    @{N='东北'; U='https://www.tohoku.ac.jp/en/academics/graduate_school.html'}
)

foreach ($t in $targets) {
    Write-Host "`n=== $($t.N): $($t.U) ==="
    try {
        $r = Invoke-WebRequest -Uri $t.U -UseBasicParsing -TimeoutSec 15
        $text = $r.Content -replace '<[^>]+>',' ' -replace '\s+',' '
        # Find all 研究科 mentions
        $found = [regex]::Matches($text, '.{0,40}(研究科|Graduate School of \w[\w &]+).{0,40}')
        $seen = New-Object 'System.Collections.Generic.HashSet[string]'
        $count = 0
        foreach ($m in $found) {
            $s = $m.Value.Trim()
            if ($seen.Add($s) -and $count -lt 20) {
                Write-Host "  $s"
                $count++
            }
        }
        if ($count -eq 0) { Write-Host "  (No 研究科 found - trying links)"; }
    } catch {
        Write-Host "  ERROR: $_"
    }
}