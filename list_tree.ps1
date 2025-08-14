$OutputFile = "file_structure.txt"

# 要排除的文件列表
$exclude = @("file_structure.txt", "list_tree.ps1", "list_tree.bat")

# 清空旧文件，使用 UTF-8 编码
[System.IO.File]::WriteAllText($OutputFile, "", [System.Text.Encoding]::UTF8)

# 输出根目录
[System.IO.File]::AppendAllText($OutputFile, (Get-Item .).Name + '/' + "`r`n", [System.Text.Encoding]::UTF8)

function Show-Tree($path, $indent="") {
    $items = Get-ChildItem $path | Where-Object { $exclude -notcontains $_.Name } | Sort-Object PSIsContainer -Descending
    $count = $items.Count
    for ($i = 0; $i -lt $count; $i++) {
        $item = $items[$i]
        # 判断最后一个
        if ($i -eq $count - 1) {
            $prefix = "- "
            $newIndent = $indent + "    "
        } else {
            $prefix = "- "
            $newIndent = $indent + "    "
        }

        if ($item.PSIsContainer) {
            # 目录
            [System.IO.File]::AppendAllText($OutputFile, $indent + $prefix + $item.Name + '/' + "`r`n", [System.Text.Encoding]::UTF8)
            Show-Tree $item.FullName $newIndent
        } else {
            # 文件
            [System.IO.File]::AppendAllText($OutputFile, $indent + $prefix + $item.Name + "`r`n", [System.Text.Encoding]::UTF8)
        }
    }
}

Show-Tree .
Write-Host "目录结构已输出到 file_structure.txt"
