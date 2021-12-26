local M = {}
M.FuzzySearch = function()
    local width = vim.o.columns - 4
    local height = 11
    if (vim.o.columns >= 85) then
        width = 80
    end
    vim.api.nvim_open_win(
        vim.api.nvim_create_buf(false, true),
        true,
        {
            relative = 'editor',
            style = 'minimal',
            border = 'shadow',
            noautocmd = true,
            width = width,
            height = height,
            col = math.min((vim.o.columns - width) / 2),
            row = math.min((vim.o.lines - height) / 2 - 1),
        }
    )
    local file = vim.fn.tempname()
    vim.fn.termopen('find . -type f | fzy > ' .. file, {on_exit = function()
        vim.api.nvim_command('bdelete!')
        local f = io.open(file, 'r')
        local stdout = f:read('*all')
        f:close()
        os.remove(file)
        vim.api.nvim_command('edit ' .. stdout)
    end})
end
return M
